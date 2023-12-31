import React from 'react';
import {Card} from "react-bootstrap";

/*
    This component renders a card with a title and a chart.
    Arguments:
        title: The title of the card (String)
        chart: The chart to be rendered (React Component)
*/

const GraphCard = ({ title, chart, width }) => {
    return (
        <div style={{ width: `${window.innerWidth * width / 100}px` }}>
            <Card border="primary"
                  className="m-1">
                <Card.Title className="border-bottom border-secondary border-1 text-primary fs-1 p-3">
                    <div className="text-center">
                        {title}
                    </div>
                </Card.Title>
                {chart}
            </Card>
        </div>


    );
};

export default GraphCard;
