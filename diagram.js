    // setup 
    const data = ChartVenn.extractSets([
        {
            label:'A',
            values:['valores de a']
        },
        {
            label:'B',
            values:['valores de B']
        },
        {
            label:'C',
            values:['valores de C']
        }
    ]
    )

    // config 
    let config = {
      type: 'venn',
      data,
      options: {
        borderColor: [
          'rgba(255, 26, 104, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(0, 0, 0, 1)'
        ],backgroundColor: [
          'rgba(255, 255, 255, 0.8)',
          'rgba(255, 255, 255, 0.8)',
          'rgba(255, 255, 255, 0.8)',
          'rgba(255, 255, 255, 0.8)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 255, 255, 0.8)',
          'rgba(0, 0, 0, 0.2)'
        ]
      }
    };

const borderColor = [
  'rgba(255, 26, 104, 1)',
  'rgba(54, 162, 235, 1)',
  'rgba(255, 206, 86, 1)',
  'rgba(75, 192, 192, 1)',
  'rgba(153, 102, 255, 1)',
  'rgba(255, 159, 64, 1)',
  'rgba(0, 0, 0, 1)'
]

const setBackgroundColor = (backgroundColor) => {
    config = { options: { borderColor, backgroundColor } , ...config}
}


export function buildDiagram(ncanvas){
    const ctx = ncanvas.getContext('2d');

    const myChart = new Chart(
        ctx,
        config
    );

    return myChart;
}

export const AUnionB = () => {
    const backgroundColor = [];
    setBackgroundColor(backgroundColor);
}

export const AUnionC = () => {
    const backgroundColor = [];
    setBackgroundColor(backgroundColor);
}
  