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
class MainFile extends Component {

    render() {
        var JsonData = [
            { id: 1573377634745, top: 0, left: 0, type: "Navbar" },
            { id: 1573383465481, top: 327, left: 30, type: "Card" },
            { id: 1573383468174, top: 328, left: 322, type: "Card" },
            { id: 1573383470534, top: 328, left: 633, type: "Card" },
            { id: 1573383475776, top: 329, left: 937, type: "Card" },
            { id: 1573383475785, top: 800, left: 600, type: "Bargraph" }
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