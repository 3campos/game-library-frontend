import React, { Component } from 'react'
import BackBtn from './BackBtn'

class ShowContainerAPI extends Component {
    constructor(props){
        super(props)
    }

    render(){
        let genrePull =[]
        const removeHtmlTags = (str) => {
            if ((str===null) || (str==='')){
                return false;
            }
            else {
                str = str.toString()
            }

        // Below is a regular expression (regex) to identify html tags in the input string and replace the identified html tag with a null string.

        return str.replace( /(<([^>]+)>)/ig, '');
            //Analysis:
                //the above regular expression replaces the html tags with nothing using an empty string.
                //source: https://stackoverflow.com/questions/9444876/what-is-replace-ig-doing
                //the parentheses surround what to look for with the replace method:
                    //<= replaces the left tags with nothing.
                    // [^>]=replaces the tag letter (p, h1, etc.) immediately after the opening left tag
                    // + = the '+' symbol is a repetition operator which executes the method multiple times
                        //source for "repetition operator": https://stackoverflow.com/questions/3850217/what-is-the-meaning-of-in-a-regex
                    //> = replaces the right tag with nothing
                    // /ig='i' makes the regular expression case insensitive and 'g' means that all occurrences of tags that the method finds on the rendered page should be replaced.
        }
        // let alteredDescription = removeHtmlTags(this.props.gameDescription)
        return(
            <>
            {/* {console.log(this.props.description)} */}
            <div>Title: {this.props.gameTitle}</div>
            <div>{this.props.gameImage}</div>
            <div>Game Duration: {this.props.gameDuration} hours</div>
            <div>Genres: 
                {this.props.gameGenre.forEach(genre => {
                    genrePull.push(' ' + genre.name)
                })
                }
                {genrePull = genrePull.toString()}
            </div>
            <div>Rating: {this.props.gameRating}/5</div>
            <div>Description: {this.props.gameDescription}</div>
            <div><BackBtn/></div>
            </>
        )
    }
}

export default ShowContainerAPI