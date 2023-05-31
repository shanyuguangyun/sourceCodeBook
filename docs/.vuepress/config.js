module.exports = {
  base: "/sourceCodeBook/",
  title: "山雨光云小集",
  description: "山雨光云小集",
  
  themeConfig: {
    sidebarDepth: 3,
    nav: [
      { text: "主页", link: "https://shanyuguangyun.github.io/webBook/front/vue" },
      { text: "基础知识", link: "https://shanyuguangyun.github.io/gitBook" },
      { text: "数据结构", link: "https://shanyuguangyun.github.io/dsBook" },
      { text: "生活集", link: "https://shanyuguangyun.github.io/happyLife" },
      { text: "GitHub", link: "https://github.com/shanyuguangyun" },
    ],
    sidebar: [
      {
        title: "Mybatis", // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 3, // 可选的, 默认值是 1
        children: [
          "/mybatis/jdbc",
          "/mybatis/mybatis",
        ],
      },
      {
        title: "Spring", // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 2, // 可选的, 默认值是 1
        children: [
          "/spring/beans",
          "/spring/spring",
        ],
      },
      {
        title: "Xxl-job",
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 2, // 可选的, 默认值是 1
        children: [
          "/xxl-job/admin", 
        ],
      }
    ],
  },
};
