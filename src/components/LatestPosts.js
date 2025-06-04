import React from 'react';
import '../styles/LatestPosts.css';
import postFirst from '../assets/images/l1.png';
import postSecond from '../assets/images/l2.png';
import postThird from '../assets/images/l3.png';
import postFourth from '../assets/images/l4.png';
import {Button, Card, CardBody, UncontrolledCollapse} from "reactstrap";

function LatestPosts(props) {
    return (
        <section className="latest-posts d-flex justify-content-center align-items-center">
            <div className="latest-posts-container d-flex flex-column justify-content-center align-items-center gap-4">
                <div
                    className="latest-posts-header d-flex flex-row align-items-center justify-content-center w-100 gap-2">
                    <h1 className={"posts-header d-flex fs-3"}>LATEST POSTS</h1>
                    <hr className={"horizontal-line"}/>
                </div>

                <div className="latest-container d-flex flex-row align-items-start justify-content-center gap-5">
                    <div
                        className="latest-posts-content d-flex flex-column align-items-start justify-content-center gap-2 w-25">
                        <div
                            className="posts-content-image d-flex flex-column align-items-start justify-content-center gap-0 m-0">
                            <p className={"content-image-type d-flex bg-warning text-white align-items-center justify-content-center p-1 m-0"}>GADGETS</p>
                            <img src={postFirst} alt="item" width={"290px"} height={"220px"}/>
                        </div>
                        <h1 className="latest-posts-title d-flex fs-5 m-0">5 MUST-HAVE GADGETS FOR THE MODERN HOME</h1>

                        <Button
                            color="warning"
                            id="toggler"
                            className={"btn btn-warning w-50 text-white"}
                            style={{
                                marginBottom: '1rem'
                            }}
                        >
                            Read More
                        </Button>
                        <UncontrolledCollapse toggler="#toggler">
                            <Card>
                                <CardBody className={"read-more-texts"}>
                                    Dive into the world of cutting-edge technology with our latest blog post,
                                    where we highlight five essential gadgets every modern home should have.
                                    From smart assistants to home security systems,
                                    discover how these innovations can enhance your daily life and bring convenience to your fingertips.
                                </CardBody>
                            </Card>
                        </UncontrolledCollapse>

                    </div>

                    <div
                        className="latest-posts-content d-flex flex-column align-items-start justify-content-center gap-2 w-25">
                        <div
                            className="posts-content-image d-flex flex-column align-items-start justify-content-center gap-0 m-0">
                            <p className={"content-image-type d-flex bg-warning text-white align-items-center justify-content-center p-1 m-0"}>PHONES</p>
                            <img src={postSecond} alt="item" width={"290px"} height={"220px"}/>
                        </div>
                        <h1 className="latest-posts-title d-flex fs-5 m-0">Eco-Friendly Innovations Making a Difference</h1>

                        <Button
                            color="warning"
                            id="toggler1"
                            className={"btn btn-warning w-50 text-white"}
                            style={{
                                marginBottom: '1rem'
                            }}
                        >
                            Read More
                        </Button>
                        <UncontrolledCollapse toggler="#toggler1">
                            <Card>
                                <CardBody className={"read-more-texts"}>
                                    Explore the intersection of technology and sustainability in our latest blog post.
                                    Learn about the innovative eco-friendly technologies revolutionizing various industries,
                                    from renewable energy solutions to recyclable electronics.
                                    Discover how these advancements are paving the way for a more sustainable future.
                                </CardBody>
                            </Card>
                        </UncontrolledCollapse>

                    </div>

                    <div
                        className="latest-posts-content d-flex flex-column align-items-start justify-content-center gap-2 w-25">
                        <div
                            className="posts-content-image d-flex flex-column align-items-start justify-content-center gap-0 m-0">
                            <p className={"content-image-type d-flex bg-warning text-white align-items-center justify-content-center p-1 m-0"}>TECH</p>
                            <img src={postThird} alt="item" width={"290px"} height={"220px"}/>
                        </div>
                        <h1 className="latest-posts-title d-flex fs-5 m-0">The Future of Wearable Tech: Trends to Watch</h1>

                        <Button
                            color="warning"
                            id="toggler2"
                            className={"btn btn-warning w-50 text-white"}
                            style={{
                                marginBottom: '1rem'
                            }}
                        >
                            Read More
                        </Button>
                        <UncontrolledCollapse toggler="#toggler2">
                            <Card>
                                <CardBody className={"read-more-texts"}>
                                    Stay ahead of the curve with our insightful look into the rapidly evolving landscape of wearable technology.
                                    Explore the latest trends, from health monitoring devices to fashion-forward wearables,
                                    and learn how these advancements are shaping the future of personal technology
                                </CardBody>
                            </Card>
                        </UncontrolledCollapse>

                    </div>

                    <div
                        className="latest-posts-content d-flex flex-column align-items-start justify-content-center gap-2 w-25">
                        <div
                            className="posts-content-image d-flex flex-column align-items-start justify-content-center gap-0 m-0">
                            <p className={"content-image-type d-flex bg-warning text-white align-items-center justify-content-center p-1 m-0"}>DIGITAL WATCH</p>
                            <img src={postFourth} alt="item" width={"290px"} height={"220px"}/>
                        </div>
                        <h1 className="latest-posts-title d-flex fs-5 m-0">Top Apps and Tools for Remote Work</h1>

                        <Button
                            color="warning"
                            id="toggler3"
                            className={"btn btn-warning w-50 text-white"}
                            style={{
                                marginBottom: '1rem'
                            }}
                        >
                            Read More
                        </Button>
                        <UncontrolledCollapse toggler="#toggler3">
                            <Card>
                                <CardBody className={"read-more-texts"}>
                                    In today's remote work environment, productivity is key. Discover the top apps and tools that can help you stay organized,
                                    focused, and efficient while working from home. From project management platforms to time-tracking apps,
                                    find out which tools are essential for maximizing your productivity.
                                </CardBody>
                            </Card>
                        </UncontrolledCollapse>

                    </div>
                </div>

            </div>
        </section>
    );
}

export default LatestPosts;