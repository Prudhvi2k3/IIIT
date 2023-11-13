import React, { useEffect } from 'react';

const PieChart = () => {
  useEffect(() => {
    const pieCharts = document.querySelectorAll(".pie-chart");

    pieCharts.forEach((pie) => {
      const num = Number(pie.getAttribute("data-pie-percent"));
      switch (true) {
        case num > 66:
          pie.classList.add("green");
          break;
        case num > 33:
          pie.classList.add("yellow");
          break;
        default:
          return;
      }
    });
  }, []);

  return (
    <>
      <section className="section">
        <div className="container">
          <h2 className="section-title">Section Title</h2>
          <div className="grid">
          <div class="pie-card">
        <div class="pie-wrapper">
          <div class="pie-chart animate" data-pie-percent="90" style="--percent:90;">90%</div>
        </div>
        <div class="pie-content">
          <h3>Pie Heading</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi accumsan suscipit magna.</p>
        </div>
      </div>
      <div class="pie-card">
        <div class="pie-wrapper">
          <div class="pie-chart animate" data-pie-percent="66" style="--percent:66;">66%</div>
        </div>
        <div class="pie-content">
          <h3>Pie Heading</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi accumsan suscipit magna.</p>
        </div>
      </div>
      <div class="pie-card">
        <div class="pie-wrapper">
          <div class="pie-chart animate" data-pie-percent="24" style="--percent:24;">24%</div>
        </div>
        <div class="pie-content">
          <h3>Pie Heading</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi accumsan suscipit magna.</p>
        </div>
      </div>
      <div class="pie-card">
        <div class="pie-wrapper">
          <div class="pie-chart animate" data-pie-percent="29" style="--percent:29;">29%</div>
        </div>
        <div class="pie-content">
          <h3>Pie Heading</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi accumsan suscipit magna.</p>
        </div>
      </div>
      <div class="pie-card">
        <div class="pie-wrapper">
          <div class="pie-chart animate" data-pie-percent="82" style="--percent:82;">82%</div>
        </div>
        <div class="pie-content">
          <h3>Pie Heading</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi accumsan suscipit magna.</p>
        </div>
      </div>
      <div class="pie-card">
        <div class="pie-wrapper">
          <div class="pie-chart animate" data-pie-percent="45" style="--percent:45;">45%</div>
        </div>
        <div class="pie-content">
          <h3>Pie Heading</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi accumsan suscipit magna.</p>
        </div>
      </div>
    </div>
  </div>
      </section>
      <section className="section section--grey">
        <div className="container">
          <h2 className="section-title">Section Title</h2>
          <div className="grid">
            {/* Copy the rest of the HTML code here */}
          </div>
        </div>
      </section>
    </>
  );
};

export default PieChart;
