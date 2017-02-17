import { render } from 'react-dom';
import { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
//////////////////////üst tarafı sabit. material-ui için aşağısı değişçek

import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 500,
    height: 450,
    overflowY: 'auto',
  },
};

const tilesData = [
  {
    img: 'http://www.w3schools.com/css/img_fjords.jpg',
    title: 'Breakfast',
    author: 'jill111',
  },
  {
    img: 'http://www.material-ui.com/images/grid-list/00-52-29-429_640.jpg',
    title: 'Tasty burger',
    author: 'pashminu',
  },

];


export default class myTemplate extends Component {
  constructor(props) {
    super(props);


  }





  render() {

    return (
      <MuiThemeProvider>


        <div style={styles.root}>
       <GridList
         cellHeight={180}
         style={styles.gridList}
       >
         <Subheader>December</Subheader>
         {tilesData.map((tile) => (
           <GridTile
             key={tile.img}
             title={tile.title}
             subtitle={<span>by <b>{tile.author}</b></span>}
             actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
           >
             <img src={tile.img} />
           </GridTile>
         ))}
       </GridList>
     </div>


    </MuiThemeProvider>

    );

  }

}
