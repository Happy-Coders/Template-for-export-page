import React, { Component } from 'react'
import { Icon, Button } from 'antd'
import Piechart from '../widgets/piechart'
import Areagraph from '../widgets/Areagraph'
import Bargraph from '../widgets/Bargraph'
import Card from '../widgets/Card'
import Tag from '../widgets/Tag'
import Timeline from '../widgets/Timeline'
import Carousel from '../widgets/Carousel'
import Navbar from '../widgets/Navbar'
import FacebookFrame from '../widgets/Facebook'
import LinkedInFrame from '../widgets/Linkedin'
import YoutubeFrame from '../widgets/YouTubeFrame'
import Footer from '../widgets/Footer'
import TwitterFrame from '../widgets/Twitter'
import GoogleFrame from '../widgets/Map'
class MainFile extends Component {

    render() {
        var JsonData = [
            {id: 1573551233636, top: 0, left: 0, type: "Navbar"},
            {id: 1573551241882, top: 150, left: -475, type: "Piechart"},
            {id: 1573551245343, top: 123, left: 792, type: "Card"},
            {id: 1573551248120, top: 122, left: 1179, type: "Card"},
            {id: 1573551258573, top: 543, left: -16, type: "Areagraph"},
            {id: 1573551264280, top: 991, left: -86, type: "Timeline"},
            {id: 1573551274865, top: 1345, left: 407, type: "FacebookFrame"}
        ]

        const allComponent = JsonData.map((compo) => {
            var style = {
                position: "absolute",
                left: compo.left,
                top: compo.top
            }
            switch (compo.type) {
                case 'Navbar':
                    return (
                        <div style={style} >
                            <Navbar />
                        </div>
                    )
                case 'Card':
                    return (
                        <div style={style} >
                            <Card />
                        </div>
                    )
                case 'Carousel':
                    return (
                        <div style={style} >
                            <Carousel />
                        </div>
                    )
                case 'Tag':
                    return (
                        <div style={style} >
                            <Tag />
                        </div>
                    )
                case 'Timeline':
                    return (
                        <div style={style} >
                            <Timeline />
                        </div>
                    )
                case 'Piechart':
                    return (
                        <div style={style} >
                            <Piechart />
                        </div>
                    )
                case 'Areagraph':
                    return (
                        <div style={style} >
                            <Areagraph />
                        </div>
                    )
                case 'Bargraph':
                    return (
                        <div style={style} >
                            <Bargraph />
                        </div>
                    )
            }
        })
        console.log(allComponent, "alllllllll")
        return (
            <div >
                {allComponent}
            </div>
        )
    }
}

export default MainFile