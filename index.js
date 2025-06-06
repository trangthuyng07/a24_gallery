import define1 from "./7e634ebe314443f8@174.js"; // hoặc các file hỗ trợ khác bạn dùng (d3, html...)

export default function define(runtime, observer) {
  const main = runtime.module();

  // Load any library module you're importing (like D3)
  main.import("d3", define1);
  main.import("html", define1);  // Nếu bạn dùng html tagged template

  // Your actual notebook cells:
  main.variable(observer("viewof filmSectionCarousel")).define("viewof filmSectionCarousel", ["html", "d3", "datasets"], function(html, d3, datasets) {
    // --- Dán code viewof filmSectionCarousel của bạn ở đây ---
  });

  main.variable(observer("chart")).define("chart", ["viewof filmSectionCarousel"], function(_) {
    return _;
  });

  return main;
}
