import React from 'react';

export default function Footer() {
    return (
        <div className='container'>
            <div className="d-flex justify-content-center">
                <a className='col-4 mt-4' href='https://github.com/tylerf808'><img className='logo' alt="github logo" src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"></img></a>
                <a className='col-4 mt-4' href='https://www.linkedin.com/in/tyler-fabian-0778b7122/'><img className='logo' alt="linkedin logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/768px-LinkedIn_logo_initials.png"></img></a>
                <a className='col-4 mt-4' href='https://stackoverflow.com/users/13457058/tyler-fabian'><img className='logo' alt="stackoverflow logo" src="https://cdn.iconscout.com/icon/free/png-512/stackoverflow-2752065-2284882.png"></img></a>
            </div>
        </div>
    )
}