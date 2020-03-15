import React from 'react'

function ListItem(props) {
    return <button style={{ margin: 10 }} className="btn btn-outline-secondary">{props.value}</button>;
}

const ConferenceTags = (props) => {
    const keywords = props.keywords;
    const listItems = keywords.map((keyword,index) =>
        <ListItem key={index.toString()}
            value={keyword} />
    );
    return (
        <div>
            <div className="container">
                {listItems}
            </div>
        </div>
    );
};

export default ConferenceTags
