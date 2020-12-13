import React from 'react';
import { withRouter } from 'react-router';

function Menu(props) {
    const { history } = props;

    return (
        <div>
            <button onClick={(event) => {
                    history.push("/")
                }}
            />
        </div>
    )
}

export default withRouter(Menu);
