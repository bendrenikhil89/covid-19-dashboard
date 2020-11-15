import React from 'react';
import  {Card, CardContent, Typography} from '@material-ui/core';

function InfoBox(props) {
    return (
        <Card>
            <CardContent>
                <Typography color="textSecondary" className="infoBox__title">
                    {props.title}
                </Typography>
                <h2 className="infoBox__cases">{props.cases}</h2>
                <Typography color="textSecondary" className="infoBox__total">{props.total}</Typography>
            </CardContent>            
        </Card>
    )
}

export default InfoBox;
