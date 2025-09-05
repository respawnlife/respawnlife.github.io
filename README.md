# Respawn Life 官方网站

这是 Respawn Life 软件开发外包公司的官方网站项目，托管在 GitHub Pages 上。

## 网站特点

- 现代化响应式设计，适配各种设备屏幕
- 清晰展示公司服务、技术能力、团队信息和联系方式
- 简洁专业的用户界面，提供良好的用户体验
- 优化的性能和加载速度
- 科技感十足的视觉设计

## 网站口号

**重塑数字生活，创造无限可能**

这一口号贯穿整个网站，体现了Respawn Life的核心理念：通过技术创新重塑数字体验，为客户创造无限可能性。

## 项目结构

```
respawnlife.github.io/
├── css/
│   └── style.css          # 网站样式文件
├── images/                # 图片文件夹
│   ├── favicon.ico        # 网站图标
│   ├── hero-bg.jpg        # 首页横幅背景
│   ├── about.jpg          # 关于我们页面图片
│   ├── tech-pattern.png   # 技术部分背景图案
│   ├── tech-*.png         # 各种技术图标
│   ├── IMAGE_GUIDE.md     # 图片指南文档
│   └── README.md          # 图片文件夹说明
├── js/
│   └── main.js            # JavaScript 功能实现
├── index.html             # 网站主页
├── CNAME                  # 自定义域名配置
├── .gitignore             # Git忽略文件配置
└── README.md              # 项目说明文档
```

## 本地开发

要在本地运行此网站：

1. 克隆此仓库：
   ```
   git clone https://github.com/respawnlife/respawnlife.github.io.git
   ```

2. 进入项目目录：
   ```
   cd respawnlife.github.io
   ```

3. 使用本地服务器运行网站（可以使用 Python 的简易服务器）：
   ```
   # 如果安装了 Python 3
   python -m http.server
   
   # 如果安装了 Python 2
   python -m SimpleHTTPServer
   ```

4. 在浏览器中访问 `http://localhost:8000`

## 自定义内容

### 修改文本内容

直接在 `index.html` 文件中编辑相应的文本内容。

### 更换图片

1. 请参考 `images/IMAGE_GUIDE.md` 文件获取关于图片风格和获取方法的详细指南
2. 准备好您想使用的图片
3. 将图片放入 `images` 文件夹
4. 在 `index.html` 中更新相应的图片路径

### 修改样式

网站样式定义在 `css/style.css` 文件中，您可以根据需要修改颜色、字体、间距等样式。

## 部署

此网站使用 GitHub Pages 托管，只需将更改推送到 main 分支即可自动部署：

```
git add .
git commit -m "更新网站内容"
git push origin main
```

## 联系方式

如有任何问题或建议，请联系：contact@respawnlife.com

## 版权信息

© 2025 Respawn Life. 保留所有权利。