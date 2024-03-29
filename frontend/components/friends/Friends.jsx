import React from 'react';
import * as d3 from 'd3';

class Friends extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    	nodes: this.props.nodes,
      links: this.props.links,
    };
  }

  componentDidMount() {
   this.force = d3.forceSimulation(this.state.nodes)
     .force("charge",
       d3.forceManyBody()
         .strength(this.props.forceStrength)
     )
     .force("link",
       d3.forceLink().distance(this.props.linkDistance).links(this.state.links)
     )
     .force("x", d3.forceX(this.props.width / 2))
     .force("y", d3.forceY(this.props.height / 2));

   this.force.on('tick', () => this.setState({
     links: this.state.links,
     nodes: this.state.nodes
   }));
 }

 render() {
   const friends = Object.values(this.props.friends) || [];

   return (
     <div>
     <svg width={this.props.width} height={this.props.height}>
       {this.state.links.map((link, index) =>(
         <line
           x1={link.source.x}
           y1={link.source.y}
           x2={link.target.x}
           y2={link.target.y}
           key={`line-${index}`}
           stroke="black" />
       ))}
       {this.state.nodes.map((node, index) =>(
         <circle r={node.r} cx={node.x} cy={node.y} fill="red" key={index}/>
       ))}
       {friends.map((friend, index) =>(
         <image src={friend.image} x="0" y="0" height="50px" width="50px" key={index}/>
       ))}
     </svg>
     </div>
   );
 }
}

export default Friends;

Friends.defaultProps = {
  width: 300,
  height: 300,
  forceStrength: -20,
  linkDistance: 90,
};
