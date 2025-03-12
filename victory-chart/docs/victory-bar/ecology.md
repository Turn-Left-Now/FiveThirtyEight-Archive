VictoryBar
=============

Draw SVG bar charts with [React][]. VictoryBar is a composable component, so it doesn't include axes. Check out [VictoryChart][] for complete bar charts and more.

## Features

### Props are Optional

VictoryBar is written to be highly configurable, but it also includes a set of sensible defaults and fallbacks. If no props are provided, VictoryBar will plot sample data.

``` playground
<VictoryBar/>
```

To display your own data, just pass in an array of data objects, or an array of arrays via the data prop.

```playground
<VictoryBar
  data={[
    {x: 1, y: 1},
    {x: 2, y: 2},
    {x: 3, y: 3},
    {x: 4, y: 2},
    {x: 5, y: 1}
  ]}
/>
```

VictoryBar comes with data accessor props to make passing in data much more flexible.
assign a property to x or y, or process data on the fly.

```playground
<VictoryBar
  data={[
    {amount: 1, yield: 1, error: 0.5},
    {amount: 2, yield: 2, error: 1.1},
    {amount: 3, yield: 3, error: 0},
    {amount: 4, yield: 2, error: 0.1},
    {amount: 5, yield: 1, error: 1.5}
  ]}
  x={"amount"}
  y={(data) => (data.yield + data.error)}
/>
```

Use the VictoryGroup wrapper to create a set of grouped bars.

```playground
<VictoryGroup
  height={500}
  offset={20}
  colorScale={"qualitative"}
>
  <VictoryBar
    data={[
      {x: 1, y: 1},
      {x: 2, y: 2},
      {x: 3, y: 3}
    ]}
  />
  <VictoryBar
    data={[
      {x: 1, y: 2},
      {x: 2, y: 1},
      {x: 3, y: 1}
    ]}
  />
  <VictoryBar
    data={[
      {x: 1, y: 3},
      {x: 2, y: 4},
      {x: 3, y: 2}
    ]}
  />
</VictoryGroup>
```

Or use the VictoryStack wrapper to create a stacked layout. The y domain is automatically set to account for the cumulative maximum of the data:

```playground
<VictoryStack
  height={500}
  colorScale={"qualitative"}
>
  <VictoryBar
    data={[
      {x: 1, y: 1},
      {x: 2, y: 2},
      {x: 3, y: 3}
    ]}
  />
  <VictoryBar
    data={[
      {x: 1, y: 2},
      {x: 2, y: 1},
      {x: 3, y: 1}
    ]}
  />
  <VictoryBar
    data={[
      {x: 1, y: 3},
      {x: 2, y: 4},
      {x: 3, y: 2}
    ]}
  />
</VictoryStack>
```
### Flexible and Configurable

The sensible defaults VictoryBar provides makes it easy to get started, but everything can be overridden, and configured to suit your needs:

```playground
<VictoryStack horizontal
  height={600}
  padding={75}
  style={{
    data: {width: 30},
    labels: {fontSize: 14}
  }}
  labels={["one", "two", "three"]}
>
  <VictoryBar
    style={{data: {fill: "tomato"}}}
    data={[
      {x: 1, y: 1},
      {x: 2, y: 2},
      {x: 3, y: 3}
    ]}
  />
  <VictoryBar
    style={{data: {fill: "orange"}}}
    data={[
      {x: 1, y: 2},
      {x: 2, y: 1},
      {x: 3, y: 1}
    ]}
  />
  <VictoryBar
    style={{data: {fill: "gold"}}}
    data={[
      {x: 1, y: 3},
      {x: 2, y: 4},
      {x: 3, y: 2}
    ]}
  />
</VictoryStack>
```

*NOTE: horizontal bars are only partially supported in VictoryChart. Check for updates soon!*

data objects can be styled directly for granular control

```playground
<VictoryBar
  height={500}
  padding={75}
  data={[
    {x: 1, y: 1, fill: "gold", label: "SO"},
    {x: 2, y: 3, fill: "orange"},
    {x: 3, y: 2, fill: "tomato", label: "WOW"},
    {x: 4, y: 4, fill: "pink"},
    {x: 5, y: 3, fill: "magenta", label: "SUCH"},
    {x: 6, y: 5, fill: "purple"},
    {x: 7, y: 6, fill: "blue", label: "LABEL"}
  ]}
/>
```

Functional styles allow elements to determine their own styles based on data

```playground
<VictoryBar
  height={500}
  padding={75}
  style={{
    data: {
      fill: (data) => data.y > 2 ?
        "red" : "blue"
    }
  }}
  data={[
    {x: 1, y: 1},
    {x: 2, y: 2},
    {x: 3, y: 3},
    {x: 4, y: 2},
    {x: 5, y: 1}
  ]}
/>
```

### Events

Use the `events` prop to attach arbitrary event handlers to data, labels, or the containing svg.
Event handlers on data and labels components are called with the event object, the props
corresponding to that component, and the index of that component. Values returned from
event handlers on data or labels will be stored as state on VictoryBar. Data and labels
state can be accessed by index on the `dataState`, and `labelsState` state objects respectively.

```playground
<VictoryBar
  height={500}
  style={{data: {fill: "orange"}}}
  data={[
    {x: 1, y: 1},
    {x: 2, y: 2},
    {x: 3, y: 3},
    {x: 4, y: 2},
    {x: 5, y: 1}
  ]}
  events={{
    data: {
      onClick: () => {
        return {style: {fill: "tomato"}}
      },
      onMouseOut: () => null
    }
  }}
/>
```

### Animating

VictoryBar animates with [VictoryAnimation][] as data changes when an `animate` prop is provided.

```playground_norender
class App extends React.Component {
   constructor(props) {
    super(props);
    this.state = {
      data: this.getData(),
    };
  }

  getData() {
    return _.map(_.range(4), (index) => {
      return [
        {x: "apples", y: _.random(1, 5)},
        {x: "oranges", y: _.random(1, 5)},
        {x: "bananas", y: _.random(1, 5)}
      ];
    });
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        data: this.getData(),
      });
    }, 2000);
  }

  render() {
    return (
      <VictoryGroup
        height={600}
        offset={15}
        animate={{duration: 2000}}
        colorScale={[
          "cornflowerblue",
          "tomato",
          "orange",
          "gold",
        ]}
      >
        {this.state.data.map((data, i) => {
          return (
            <VictoryBar
              data={data} key={i}
            />
          );
        })}
      </VictoryGroup>
    );
  }
}
ReactDOM.render(<App/>, mountNode);

```

### Props

[React]: https://github.com/facebook/react
[VictoryAnimation]: http://victory.formidable.com/docs/victory-animation
[VictoryChart]: http://victory.formidable.com/docs/victory-chart
