import React from 'react';
import CoverFlow from 'coverflow-react';
import './demo.css';

class Demo extends React.Component {
  constructor(props){
    super(props);
    this.passPropCheckbox = this.passPropCheckbox.bind(this);
    this.inputRow = this.inputRow.bind(this);
    this.itemRatio = this.itemRatio.bind(this);
    this.code = this.code.bind(this);
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
    window.addEventListener('resize', ()=>{
      this.setState({width: document.body.offsetWidth});
    });
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
        <div className="properties">
          <form>
            {this.inputRow('width', 'number')}
            {this.inputRow('height', 'number')}
            {this.itemRatio()}
            {this.inputRow('background', 'color')}
          </form>
          {this.code()}
        </div>
        <CoverFlow {...props} />
      </div>
    );
  }
  passPropCheckbox(propName) {
    return (<input type="checkbox"
                      checked={this.state[propName]}
                      onChange={(e)=>{
                        this.setState((prevState, props)=>{
                          let newState = {};
                          newState[propName] =  !prevState[propName];
                          return newState;
                        });
                      }} />);
  }
  inputRow(name, type){
    let passName = 'pass' + name.charAt(0).toUpperCase() + name.slice(1);
    return (<div>
              {this.passPropCheckbox(passName)}
              <label>Container {name}:</label>
              <input placeholder={name} 
                    type={type}
                    min="1"
                    value={this.state[name]} 
                    onChange={(e)=>{
                      let newState = {};
                      newState[name] = type === 'number' ? parseInt(e.target.value) : e.target.value;
                      this.setState(newState);
                    }}
                    disabled={!this.state[passName]} />
            </div>);
  }
  itemRatio(){
    const axisInput = (axis) => {
      return (<input placeholder={axis}
                    type="number" 
                    min="1"
                    style={{width: '60px'}}
                    value={this.state.itemRatio[axis]} 
                    onChange={(e)=>{
                      let newState = {
                        itemRatio: {}
                      };
                      newState.itemRatio[axis] = parseInt(e.target.value);
                      let otherAxis = axis === 'x' ? 'y' : 'x';
                      newState.itemRatio[otherAxis] = this.state.itemRatio[otherAxis];
                      this.setState(newState);
                    }}
                    disabled={!this.state.passItemRatio} />);
    };
    return (<div>
              {this.passPropCheckbox('passItemRatio')}
              <label>Item Ratio:</label>
              {axisInput('x')}
              {axisInput('y')}
            </div>);
  }
  code(){
    return (<code>
{`<CoverFlow imagesArr={imagesArr} 
  ${this.state.passWidth ? `width="${this.state.width}"` : ''}
  ${this.state.passHeight ? `height="${this.state.height}"` : ''}
  ${this.state.passItemRatio ? `itemRatio="${this.state.itemRatio.x}:${this.state.itemRatio.y}"` : ''}
    ${this.state.passBackground ? `background="${this.state.background}"` : ''} />`}
          </code>);
  }
}

export default Demo;