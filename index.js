import define1 from "./7e634ebe314443f8@174.js";
import { cleanMovies } from "./data.js";

export default function define(runtime, observer) {
  const main = runtime.module();
  main.import("html", define1);
  main.import("d3", define1);

  main.variable(observer("datasets")).define("datasets", ["d3"], function(d3) {
    const cleaned = [...cleanMovies];

    const topProfit = cleaned
      .filter(d => d.revenue > 0 && d.budget > 0)
      .map(d => ({...d, profit: d.revenue - d.budget}))
      .sort((a, b) => d3.descending(a.profit, b.profit))
      .slice(0, 10);

    const topROI = cleaned
      .filter(d => d.budget > 0 && d.revenue > 0)
      .map(d => ({...d, roi: d.revenue / d.budget}))
      .sort((a, b) => d3.descending(a.roi, b.roi))
      .slice(0, 10);

    const topIMDB = cleaned
      .filter(d => d.vote_average)
      .sort((a, b) => d3.descending(a.vote_average, b.vote_average))
      .slice(0, 10);

    const upcoming = cleaned.filter(d => d.status === "Planned" && d.release_date && new Date(d.release_date) > new Date());
    const unreleased = cleaned.filter(d => d.status === "Released" && (!d.release_date || new Date(d.release_date) > new Date()));
    const postProduction = cleaned.filter(d => d.status === "Post Production");
    const inProduction = cleaned.filter(d => d.status === "In Production");
    const plannedNoDate = cleaned.filter(d => d.status === "Planned" && !d.release_date);
    const rumored = cleaned.filter(d => d.status === "Rumored");

    return {
      topProfit,
      topROI,
      topIMDB,
      upcoming,
      unreleased,
      postProduction,
      inProduction,
      plannedNoDate,
      rumored
    };
  });

  main.variable(observer("viewof filmSectionCarousel")).define("viewof filmSectionCarousel", ["html", "d3", "datasets"], function(html, d3, datasets) {
    // Dán toàn bộ code viewof filmSectionCarousel ở đây
    // (bạn đã có sẵn từ tin nhắn trước)
    return YOUR_COMPONENT_ELEMENT;
  });

  main.variable(observer("chart")).define("chart", ["viewof filmSectionCarousel"], _ => _);

  return main;
}
