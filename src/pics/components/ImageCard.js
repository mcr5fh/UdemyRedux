import React from 'react';
import _ from 'lodash'

class ImageCard extends React.Component {

    constructor(props) {
        super(props);

        this.state = { spansH: 0, spansW: 0 };
        this.imageRef = React.createRef();
        this.debounceSetSpans = _.debounce(this.setSpans, 300);
    }

    componentDidMount() {
        // console.log(this.imageRef);
        this.imageRef.current.addEventListener("load", this.setSpans);
        //FIXME: Is this too laggy?
        window.addEventListener("resize", this.setSpans);
    }

    // componentShouldUpdate(){
    //
    // }

    setSpans = () => {
        console.log(this.imageRef);
        if (this.imageRef.current) {
            const height = this.imageRef.current.clientHeight;
            const width = this.imageRef.current.clientWidth;
            //TODO: This sucks. Pull this dynamically
            const spansH = Math.ceil(height / 10) + 1;
            const spansW = Math.ceil(width / 10);
            //if they key and variable have the same name, you can short cut
            this.setState({ spansH, spansW });
        }else{
            console.log("CURRENT WAS NULL: ", this.state)
        }
    }

    render() {
        const { description, urls } = this.props.image;
        console.log("Spans :", this.state.spansH);

        // const divStyle = this.state.spansH === 0 ? {} : { gridRowEnd: `span ${this.state.spansH}` };
        const divStyle = { gridRowEnd: `span ${this.state.spansH}` };

        return (
            <div style={divStyle}>
                <img
                    ref={this.imageRef}
                    alt={description}
                    src={urls.regular}
                />
            </div>

        );
    }
}

export default ImageCard