import React from 'react';
import FilterContainer from 'react-filter';

const customComponent = () => {

    const columnWidth = 250;
    const itemHeight = 250;
    const gutterWidth = 15;
    const gutterHeight = 15;

    return (
        <div style={{ minHeight: '200vh' }}>
            <FilterContainer
                columnWidth={columnWidth}
                itemHeight={itemHeight}
                gutterWidth={gutterWidth}
                gutterHeight={gutterHeight}
                categories={['today', 'tommorow']}
            >
                <div className="card animated zoomIn faster bg-success" data-filter="tommorow">
                    <div className="card-body">
                        <h5 className="card-title">Panel title that wraps to a new line</h5>
                        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                </div>
                <div className="card animated zoomIn faster" data-filter="today">
                    <blockquote className="blockquote mb-0 card-body">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                        <footer className="blockquote-footer">
                            <small className="text-muted">
                                Someone famous in <cite title="Source Title">Source Title</cite>
                            </small>
                        </footer>
                    </blockquote>
                </div>
                <div className="card animated zoomIn faster" data-filter="tommorow">
                    <div className="card-body">
                        <h5 className="card-title">Panel title</h5>
                        <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
                <div className="card animated zoomIn faster blue lighten-2 text-white text-center p-3" data-filter="today">
                    <blockquote className="blockquote mb-0">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat.</p>
                        <footer className="blockquote-footer">
                            <small>
                                Someone famous in <cite title="Source Title">Source Title</cite>
                            </small>
                        </footer>
                    </blockquote>
                </div>
                <div className="card animated zoomIn faster text-center" data-filter="today">
                    <div className="card-body">
                        <h5 className="card-title">Panel title</h5>
                        <p className="card-text">This card has a regular title and short paragraphy of text below it.</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
                <div className="card  animated zoomIn faster" data-filter="today">
                    <div className="card-body">
                        <h5 className="card-title">Panel title that wraps to a new line</h5>
                        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                </div>
                <div className="card  animated zoomIn faster text-right bg-secondary" data-filter="tommorow">
                    <blockquote className="blockquote mb-0">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                        <footer className="blockquote-footer">
                            <small className="text-muted">
                                Someone famous in <cite title="Source Title">Source Title</cite>
                            </small>
                        </footer>
                    </blockquote>
                </div>
                <div className="card animated zoomIn faster text-center" data-filter="tommorow">
                    <div className="card-body">
                        <h5 className="card-title">Panel title</h5>
                        <p className="card-text">This card has a regular title and short paragraphy of text below it.</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
                <div className="card animated zoomIn faster" data-filter="today">
                    <div className="card-body">
                        <h5 className="card-title">Panel title that wraps to a new line</h5>
                        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                </div>
                <div className="card animated zoomIn faster text-white bg-primary" data-filter="today">
                    <blockquote className="blockquote mb-0 card-body">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                        <footer className="blockquote-footer">
                            <small className="text-muted">
                                Someone famous in <cite title="Source Title">Source Title</cite>
                            </small>
                        </footer>
                    </blockquote>
                </div>
                <div className="card animated zoomIn faster" data-filter="tommorow">
                    <div className="card-body">
                        <h5 className="card-title">Panel title</h5>
                        <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
                <div className="card animated zoomIn faster blue lighten-2 text-white text-center p-3" data-filter="today">
                    <blockquote className="blockquote mb-0">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat.</p>
                        <footer className="blockquote-footer">
                            <small>
                                Someone famous in <cite title="Source Title">Source Title</cite>
                            </small>
                        </footer>
                    </blockquote>
                </div>
                <div className="card animated zoomIn faster text-center" data-filter="today">
                    <div className="card-body">
                        <h5 className="card-title">Panel title</h5>
                        <p className="card-text">This card has a regular title and short paragraphy of text below it.</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
                <div className="card animated zoomIn faster" data-filter="today">
                    <div className="card-body">
                        <h5 className="card-title">Panel title that wraps to a new line</h5>
                        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                </div>
                <div className="card animated zoomIn faster text-white bg-primary" data-filter="tommorow">
                    <div className="card-body text-white">
                        <h5 className="card-title">Panel title</h5>
                        <p className="card-text">This is another card with title and supporting text below. This card has some additional content to make it slightly taller overall.</p>
                        <p className="card-text"><small>Last updated 3 mins ago</small></p>
                    </div>
                </div>
                <div className="card animated zoomIn faster text-center bg-warning" data-filter="tommorow">
                    <div className="card-body">
                        <h5 className="card-title">Panel title</h5>
                        <p className="card-text">This card has a regular title and short paragraphy of text below it.</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
            </FilterContainer>
        </div>
    );
};

export default customComponent;