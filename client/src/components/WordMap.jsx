import React from 'react';
import { render } from 'react-dom';
import WordCloud from 'react-d3-cloud';

const fontSizeMapper = word => word.value / 10;
const rotate = word => (word.value % 90) - 45;

class EventWordCloud extends React.Component {
  constructor(props) {
    super(props);
  }

  shouldComponentUpdate(newProps) {
    const oldData = this.props.data;
    const newData = newProps.data;

    for (const item in oldData) {
      if (oldData[item].text !== newData[item].text || oldData[item].value !== newData[item].value) {
        return true;
      }
    }
    return false;
  }

  render() {
    return (
      <div> 
        <WordCloud
          width={this.props.width}
          height={this.props.height}
          data={this.props.data}
          fontSizeMapper={fontSizeMapper}
          padding={2}
        />
      </div>
    );
   } 
};

export default EventWordCloud