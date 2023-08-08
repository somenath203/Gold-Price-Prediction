// import React from "react";
import { Bar } from "react-chartjs-2";
import '../Styles/graph.css'; // Assuming the CSS file is named Graph.css and in the same directory as the Graph.js file.

const Graph = () => {
  return (
    <div className="chart-container">
      <Bar
        className="chart"
        data={{
          labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
          datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(255, 205, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(153, 102, 255, 0.2)'
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(255, 159, 64, 1)',
              'rgba(255, 205, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(153, 102, 255, 1)'
            ],
            borderWidth: 1,
          }]
        }}
        height={400}
        width={600}
      />
    </div>
  );
}

export default Graph;
