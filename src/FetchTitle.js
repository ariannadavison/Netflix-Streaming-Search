function handleChange(event, props) {
    // event.preventDefault()
    console.log(props)
    var select = event.target.getAttribute("value");
    props.setimdbid(
        this.state.searchResults[this.state.ids.indexOf(Number(select))].imdbid
    );
    alert(select);
    this.setState({ title: select });

    // this.title = select

    fetch("https://unogsng.p.rapidapi.com/title?netflixid=" + select, {
        method: "GET",
        headers: {
            "x-rapidapi-key": process.env.REACT_APP_KEY,
            "x-rapidapi-host": "unogsng.p.rapidapi.com",
        },
    })
        .then((response) => response.json())

        .then((tdata) => {
            // this.sendData(tdata)

            props.setTitleData(tdata.results[0].title);
            props.setimg(tdata.results[0].img);
            props.setSynopsis(tdata.results[0].synopsis);
            props.setimdbid(tdata.results[0].imdbid);
            props.setnfid(tdata.results[0].nfid);
            props.setyear(tdata.results[0].year);
            props.setClist(
                this.state.searchResults[this.state.ids.indexOf(Number(select))].clist
            );
            // this.props.setClist(this.state.searchResults[this.state.ids.indexOf(Number(select))].clist )
            this.getDetails(tdata);
            <details handleChange={this.handleChange} />
        })
};

export default handleChange