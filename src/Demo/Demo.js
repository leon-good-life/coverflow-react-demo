import React from 'react';
import CoverFlow from 'coverflow-react';
import './demo.css';

class Demo extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      width: document.body.offsetWidth,
      passWidth: true,
      height: 300,
      passHeight: true,
      itemRatio: {
        x: 8,
        y: 5
      },
      passItemRatio: true,
      background: '#f0f0f0',
      passBackground: true
    };
  }
  render(){
    const imagesArr = [
        'img/1.jpg',
        'img/2.jpg',
        'img/3.jpg',
        'img/4.jpg',
        'img/5.jpg',
        'img/6.jpg',
        'img/7.jpg',
        'img/8.jpg',
        'img/9.jpg',
        'img/10.jpg',
        'img/11.jpg',
        'img/12.jpg',
        'img/13.jpg',
        'img/14.jpg',
        'img/15.jpg',
        'img/16.jpg',
        'img/17.jpg',
        'img/18.jpg',
        'img/19.jpg',
        'img/20.jpg'
    ];
    let props = {};
    props.imagesArr = imagesArr;
    if (this.state.passWidth) {
      props.width = this.state.width;
    }
    if (this.state.passHeight){
      props.height = this.state.height;
    }
    if (this.state.passItemRatio) {
      props.itemRatio = `${this.state.itemRatio.x}:${this.state.itemRatio.y}`;
    }
    if (this.state.passBackground) {
      props.background = this.state.background;
    }
    return (
      <div className="demo">
        <CoverFlow {...props} />

        <div className="properties">

          <form>
            <div>{/*Container Width*/}
              <input type="checkbox"
                    checked={this.state.passWidth}
                    onChange={(e)=>{
                      this.setState((prevState, props)=>({
                        passWidth: !prevState.passWidth
                      }));
                    }} />
              <label>Container Width:</label>
              <input placeholder="width" 
                    type="number"
                    min="1"
                    value={this.state.width} 
                    onChange={(e)=>{
                      this.setState({width: parseInt(e.target.value)});
                    }}
                    disabled={!this.state.passWidth} />
            </div>

            <div>{/*Container Height*/}
              <input type="checkbox" 
                    checked={this.state.passHeight}
                    onChange={(e)=>{
                      this.setState((prevState, props)=>({
                        passHeight: !prevState.passHeight
                      }));
                    }} />
              <label>Container Height:</label>
              <input placeholder="height" 
                    type="number" 
                    min="1"
                    value={this.state.height} 
                    onChange={(e)=>{
                      this.setState({height: parseInt(e.target.value)});
                    }}
                    disabled={!this.state.passHeight} />
            </div>

            <div>{/*Item Ratio*/}
              <input type="checkbox" 
                    checked={this.state.passItemRatio}
                    onChange={(e)=>{
                      this.setState((prevState, props)=>({
                        passItemRatio: !prevState.passItemRatio
                      }));
                    }} />
              <label>Item Ratio:</label>
              <input placeholder="x" 
                    type="number" 
                    min="1"
                    style={{width: '60px'}}
                    value={this.state.itemRatio.x} 
                    onChange={(e)=>{
                      this.setState({
                        itemRatio: {
                          x: parseInt(e.target.value),
                          y: this.state.itemRatio.y
                        }});
                    }}
                    disabled={!this.state.passItemRatio} />
              <input placeholder="y" 
                    type="number" 
                    min="1"
                    style={{width: '60px'}}
                    value={this.state.itemRatio.y}
                    onChange={(e)=>{
                      this.setState({
                        itemRatio: {
                          x: this.state.itemRatio.x,
                          y: parseInt(e.target.value)
                        }});
                    }}
                    disabled={!this.state.passItemRatio} />
            </div>

            <div>{/*Container Background*/}
              <input type="checkbox" 
                    checked={this.state.passBackground}
                    onChange={(e)=>{
                      this.setState((prevState, props)=>({
                        passBackground: !prevState.passBackground
                      }));
                    }} />
              <label>Container Background:</label>
              <input type="color" 
                    value={this.state.background} 
                    onChange={(e)=>{
                      this.setState({background: e.target.value});
                    }}
                    disabled={!this.state.passBackground} />
            </div>
          </form>

          <br />

          <code>
{`<CoverFlow imagesArr={imagesArr} 
  ${this.state.passWidth ? `width="${this.state.width}"` : ''}
  ${this.state.passHeight ? `height="${this.state.height}"` : ''}
  ${this.state.passItemRatio ? `itemRatio="${this.state.itemRatio.x}:${this.state.itemRatio.y}"` : ''}
    ${this.state.passBackground ? `background="${this.state.background}"` : ''} />`}
          </code>
          <br />

        </div>
      </div>
    );
  }
}

export default Demo;