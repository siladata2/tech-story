import "dotenv/config";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const app = express();
const PORT = process.env.PORT || 5000;

const MONGODB_URI = process.env.MONGODB_URI;
const JWT_SECRET =
  process.env.JWT_SECRET || "tech-story-change-this-secret";

const ADMIN_USERNAME =
  process.env.ADMIN_USERNAME || "sila22";

const ADMIN_PASSWORD =
  process.env.ADMIN_PASSWORD || "sila";

app.use(
  cors({
    origin: true,
    credentials: true
  })
);

app.use(express.json({ limit: "10mb" }));

/* =====================================================
   DATABASE
===================================================== */

const adminSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    name: {
      type: String,
      default: "Sila Tech Admin"
    },
    role: {
      type: String,
      default: "super_admin"
    }
  },
  { timestamps: true }
);

const storySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      default: ""
    },
    content: {
      type: String,
      required: true
    },
    image: {
      type: String,
      default: ""
    },
    author: {
      type: String,
      default: "Sila Tech"
    },
    category: {
      type: String,
      default: "All"
    },
    tags: {
      type: [String],
      default: []
    },
    readTime: {
      type: Number,
      default: 3
    },
    status: {
      type: String,
      enum: ["draft", "published"],
      default: "draft"
    },
    featured: {
      type: Boolean,
      default: false
    },
    trending: {
      type: Boolean,
      default: false
    },
    views: {
      type: Number,
      default: 0
    }
  },
  { timestamps: true }
);

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true
    },
    description: {
      type: String,
      default: ""
    },
    image: {
      type: String,
      default: ""
    },
    active: {
      type: Boolean,
      default: true
    }
  },
  { timestamps: true }
);

const userSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    deviceId: {
      type: String,
      unique: true,
      sparse: true
    },
    notificationToken: String,
    notificationsEnabled: {
      type: Boolean,
      default: false
    },
    active: {
      type: Boolean,
      default: true
    }
  },
  { timestamps: true }
);

const notificationSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    message: {
      type: String,
      required: true
    },
    type: {
      type: String,
      enum: [
        "story",
        "update",
        "announcement",
        "system"
      ],
      default: "announcement"
    },
    storyId: {
      type: mongoose.Schema.Types.ObjectId,
      default: null
    },
    active: {
      type: Boolean,
      default: true
    }
  },
  { timestamps: true }
);

const settingsSchema = new mongoose.Schema(
  {
    key: {
      type: String,
      unique: true,
      default: "main"
    },
    latestVersion: {
      type: String,
      default: "1.0.0"
    },
    minimumVersion: {
      type: String,
      default: "1.0.0"
    },
    updateUrl: {
      type: String,
      default: ""
    },
    updateMessage: {
      type: String,
      default:
        "A new version of Tech Story is available."
    },
    maintenanceMode: {
      type: Boolean,
      default: false
    },
    maintenanceMessage: {
      type: String,
      default:
        "Tech Story is temporarily under maintenance."
    }
  },
  { timestamps: true }
);

const Admin = mongoose.model("Admin", adminSchema);
const Story = mongoose.model("Story", storySchema);
const Category = mongoose.model("Category", categorySchema);
const User = mongoose.model("User", userSchema);
const Notification = mongoose.model(
  "Notification",
  notificationSchema
);
const Settings = mongoose.model(
  "Settings",
  settingsSchema
);

/* =====================================================
   ADMIN SETUP
===================================================== */

async function createDefaultAdmin() {
  const existing = await Admin.findOne({
    username: ADMIN_USERNAME.toLowerCase()
  });

  if (existing) {
    return;
  }

  const hashedPassword = await bcrypt.hash(
    ADMIN_PASSWORD,
    12
  );

  await Admin.create({
    username: ADMIN_USERNAME.toLowerCase(),
    password: hashedPassword,
    name: "Sila Tech Admin",
    role: "super_admin"
  });

  console.log("Default admin created.");
}

/* =====================================================
   AUTH
===================================================== */

function requireAdmin(req, res, next) {
  try {
    const header = req.headers.authorization;

    if (!header?.startsWith("Bearer ")) {
      return res.status(401).json({
        success: false,
        message: "Authentication required"
      });
    }

    const token = header.substring(7);

    const decoded = jwt.verify(
      token,
      JWT_SECRET
    );

    req.admin = decoded;

    next();
  } catch {
    return res.status(401).json({
      success: false,
      message: "Session expired"
    });
  }
}

/* =====================================================
   BASIC
===================================================== */

app.get("/", (req, res) => {
  res.json({
    success: true,
    app: "Tech Story API",
    version: "1.0.0",
    status: "online"
  });
});

app.get("/api/health", (req, res) => {
  res.json({
    success: true,
    status: "healthy",
    database:
      mongoose.connection.readyState === 1
        ? "connected"
        : "disconnected"
  });
});

/* =====================================================
   ADMIN LOGIN
===================================================== */

app.post("/api/auth/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({
        success: false,
        message: "Username and password are required"
      });
    }

    const admin = await Admin.findOne({
      username: username.toLowerCase()
    });

    if (!admin) {
      return res.status(401).json({
        success: false,
        message: "Invalid username or password"
      });
    }

    const valid = await bcrypt.compare(
      password,
      admin.password
    );

    if (!valid) {
      return res.status(401).json({
        success: false,
        message: "Invalid username or password"
      });
    }

    const token = jwt.sign(
      {
        id: admin._id.toString(),
        username: admin.username,
        role: admin.role
      },
      JWT_SECRET,
      {
        expiresIn: "7d"
      }
    );

    res.json({
      success: true,
      token,
      admin: {
        id: admin._id,
        username: admin.username,
        name: admin.name,
        role: admin.role
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Login failed"
    });
  }
});

/* =====================================================
   STORIES - PUBLIC
===================================================== */

app.get("/api/stories", async (req, res) => {
  try {
    const {
      category,
      search,
      featured,
      trending
    } = req.query;

    const filter = {
      status: "published"
    };

    if (category && category !== "All") {
      filter.category = category;
    }

    if (featured === "true") {
      filter.featured = true;
    }

    if (trending === "true") {
      filter.trending = true;
    }

    if (search) {
      filter.$or = [
        {
          title: {
            $regex: search,
            $options: "i"
          }
        },
        {
          description: {
            $regex: search,
            $options: "i"
          }
        }
      ];
    }

    const stories = await Story.find(filter)
      .sort({ createdAt: -1 })
      .lean();

    res.json({
      success: true,
      stories
    });
  } catch {
    res.status(500).json({
      success: false,
      message: "Failed to load stories"
    });
  }
});

/* =====================================================
   SINGLE STORY
===================================================== */

app.get("/api/stories/:id", async (req, res) => {
  try {
    const story = await Story.findOne({
      _id: req.params.id,
      status: "published"
    });

    if (!story) {
      return res.status(404).json({
        success: false,
        message: "Story not found"
      });
    }

    story.views += 1;
    await story.save();

    res.json({
      success: true,
      story
    });
  } catch {
    res.status(404).json({
      success: false,
      message: "Story not found"
    });
  }
});

/* =====================================================
   STORIES - ADMIN
===================================================== */

app.get(
  "/api/admin/stories",
  requireAdmin,
  async (req, res) => {
    try {
      const stories = await Story.find()
        .sort({ createdAt: -1 })
        .lean();

      res.json({
        success: true,
        stories
      });
    } catch {
      res.status(500).json({
        success: false,
        message: "Failed to load stories"
      });
    }
  }
);

app.post(
  "/api/admin/stories",
  requireAdmin,
  async (req, res) => {
    try {
      const story = await Story.create({
        title: req.body.title,
        description: req.body.description || "",
        content: req.body.content,
        image: req.body.image || "",
        author: req.body.author || "Sila Tech",
        category: req.body.category || "All",
        tags: req.body.tags || [],
        readTime: Number(req.body.readTime) || 3,
        status: req.body.status || "draft",
        featured: Boolean(req.body.featured),
        trending: Boolean(req.body.trending)
      });

      res.status(201).json({
        success: true,
        story
      });
    } catch {
      res.status(500).json({
        success: false,
        message: "Failed to create story"
      });
    }
  }
);

app.put(
  "/api/admin/stories/:id",
  requireAdmin,
  async (req, res) => {
    try {
      const story =
        await Story.findByIdAndUpdate(
          req.params.id,
          req.body,
          {
            new: true,
            runValidators: true
          }
        );

      if (!story) {
        return res.status(404).json({
          success: false,
          message: "Story not found"
        });
      }

      res.json({
        success: true,
        story
      });
    } catch {
      res.status(500).json({
        success: false,
        message: "Failed to update story"
      });
    }
  }
);

app.delete(
  "/api/admin/stories/:id",
  requireAdmin,
  async (req, res) => {
    try {
      await Story.findByIdAndDelete(
        req.params.id
      );

      res.json({
        success: true,
        message: "Story deleted"
      });
    } catch {
      res.status(500).json({
        success: false,
        message: "Failed to delete story"
      });
    }
  }
);

/* =====================================================
   CATEGORIES
===================================================== */

app.get(
  "/api/categories",
  async (req, res) => {
    try {
      const categories =
        await Category.find({
          active: true
        }).sort({ name: 1 });

      res.json({
        success: true,
        categories
      });
    } catch {
      res.status(500).json({
        success: false,
        message: "Failed to load categories"
      });
    }
  }
);

app.post(
  "/api/admin/categories",
  requireAdmin,
  async (req, res) => {
    try {
      const category =
        await Category.create({
          name: req.body.name,
          description:
            req.body.description || "",
          image: req.body.image || ""
        });

      res.status(201).json({
        success: true,
        category
      });
    } catch {
      res.status(500).json({
        success: false,
        message: "Failed to create category"
      });
    }
  }
);

app.delete(
  "/api/admin/categories/:id",
  requireAdmin,
  async (req, res) => {
    try {
      await Category.findByIdAndDelete(
        req.params.id
      );

      res.json({
        success: true,
        message: "Category deleted"
      });
    } catch {
      res.status(500).json({
        success: false,
        message: "Failed to delete category"
      });
    }
  }
);

/* =====================================================
   NOTIFICATIONS
===================================================== */

app.get(
  "/api/notifications",
  async (req, res) => {
    try {
      const notifications =
        await Notification.find({
          active: true
        })
          .sort({ createdAt: -1 })
          .limit(50);

      res.json({
        success: true,
        notifications
      });
    } catch {
      res.status(500).json({
        success: false,
        message: "Failed to load notifications"
      });
    }
  }
);

app.post(
  "/api/admin/notifications",
  requireAdmin,
  async (req, res) => {
    try {
      const notification =
        await Notification.create({
          title: req.body.title,
          message: req.body.message,
          type:
            req.body.type ||
            "announcement",
          storyId:
            req.body.storyId || null
        });

      res.status(201).json({
        success: true,
        notification
      });
    } catch {
      res.status(500).json({
        success: false,
        message:
          "Failed to create notification"
      });
    }
  }
);

app.delete(
  "/api/admin/notifications/:id",
  requireAdmin,
  async (req, res) => {
    try {
      await Notification.findByIdAndDelete(
        req.params.id
      );

      res.json({
        success: true,
        message: "Notification deleted"
      });
    } catch {
      res.status(500).json({
        success: false,
        message:
          "Failed to delete notification"
      });
    }
  }
);

/* =====================================================
   APP SETTINGS / UPDATE
===================================================== */

app.get(
  "/api/settings",
  async (req, res) => {
    try {
      let settings =
        await Settings.findOne({
          key: "main"
        });

      if (!settings) {
        settings =
          await Settings.create({
            key: "main"
          });
      }

      res.json({
        success: true,
        settings
      });
    } catch {
      res.status(500).json({
        success: false,
        message:
          "Failed to load app settings"
      });
    }
  }
);

app.put(
  "/api/admin/settings",
  requireAdmin,
  async (req, res) => {
    try {
      const settings =
        await Settings.findOneAndUpdate(
          { key: "main" },
          {
            $set: req.body
          },
          {
            new: true,
            upsert: true
          }
        );

      res.json({
        success: true,
        settings
      });
    } catch {
      res.status(500).json({
        success: false,
        message:
          "Failed to update settings"
      });
    }
  }
);

/* =====================================================
   USERS
===================================================== */

app.post(
  "/api/users/register",
  async (req, res) => {
    try {
      const {
        name,
        email,
        deviceId,
        notificationToken,
        notificationsEnabled
      } = req.body;

      if (!deviceId) {
        return res.status(400).json({
          success: false,
          message: "deviceId is required"
        });
      }

      const user =
        await User.findOneAndUpdate(
          { deviceId },
          {
            name,
            email,
            notificationToken,
            notificationsEnabled,
            active: true
          },
          {
            new: true,
            upsert: true
          }
        );

      res.json({
        success: true,
        user
      });
    } catch {
      res.status(500).json({
        success: false,
        message:
          "Failed to register user"
      });
    }
  }
);

app.get(
  "/api/admin/users",
  requireAdmin,
  async (req, res) => {
    try {
      const users =
        await User.find()
          .sort({ createdAt: -1 })
          .lean();

      res.json({
        success: true,
        users
      });
    } catch {
      res.status(500).json({
        success: false,
        message: "Failed to load users"
      });
    }
  }
);

/* =====================================================
   404
===================================================== */

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found"
  });
});

/* =====================================================
   START
===================================================== */

async function start() {
  try {
    if (!MONGODB_URI) {
      throw new Error(
        "MONGODB_URI is not configured"
      );
    }

    await mongoose.connect(
      MONGODB_URI
    );

    console.log(
      "MongoDB connected successfully"
    );

    await createDefaultAdmin();

    app.listen(
      PORT,
      "0.0.0.0",
      () => {
        console.log(
          `Tech Story API running on port ${PORT}`
        );
      }
    );
  } catch (error) {
    console.error(
      "Server failed:",
      error.message
    );

    process.exit(1);
  }
}

start();