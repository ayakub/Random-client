import React from 'react';

const Blog = () => {
    return (
        <div className='grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mx-10 my-20'>

            <div className="card  bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title text-primary">what is the different ways to manage a state in a react application?</h2>
                    <p>Local (UI) state: Local state is data we manage in one or another component.Local state is most often managed in React using the useState hook.For example, local state would be needed to show or hide a modal component or to track values for a form component, such as form submission, when the form is disabled and the values of a form's inputs.
                        Global (UI) state: Global state is data we manage across multiple components.
                        Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least.
                    </p>
                </div>



            </div>


            <div className="card  bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title text-primary">how does prototypical inheritance work?</h2>
                    <p>In programming, we often want to take something and extend it.For instance, we have a user object with its properties and methods, and want to make admin and guest as slightly modified variants of it. We'd like to reuse what we have in user, not copy/reimplement its methods, just build a new object on top of it.Prototypal inheritance is a language feature that helps in that.Accessor properties are an exception, as assignment is handled by a setter function. So writing to such a property is actually the same as calling a function.</p>
                </div>
            </div>
            <div className="card bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title text-primary"> What is a unit test? Why should we write unit tests</h2>
                    <p><span className='text-primary'>Unit Testing</span> is a type of software testing where individual units or components of a software are tested.The purpose is to validate that each unit of the software code performs as expected.Unit Testing is done during the development(coding phase) of an application by the developers.Unit Tests isolate a section of code and verify its correctness.A unit may be an individual function, method, procedure, module, or object.
                        Unit tests save time and money. Usually, we tend to test the happy path more than the unhappy path. If you release such an app without thorough testing, you would have to keep fixing issues raised by your potential users. The time to fix these issues could've been used to build new features or optimize the existing system. Bear in mind that fixing bugs without running tests could also introduce new bugs into the system.
                    </p>
                </div>
            </div>
            <div className="card bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title text-primary"> React vs. Angular vs. Vue?</h2>
                    <p>
                        <span className='text-primary'>React</span> developed by Facebook, was initially released in 2013. Facebook uses React extensively in their products (Facebook, Instagram, and WhatsApp). Similar to Vue, the React developers also announce their newest version on the

                        <span className='text-primary'>Angular</span> developed by Google, was first released in 2010, making it the oldest of the lot. It is a TypeScript-based JavaScript framework. A substantial shift occurred in 2016 on the release of Angular 2 (and the dropping of the “JS” from the original name – AngularJS). Angular 2+ is known as just Angular. Although AngularJS (version 1) still gets updates, we will focus the discussion on Angular. <br />
                        <span className='text-primary'>Vue</span> also known as Vue.js, is the youngest member of the group. It was developed by ex-Google employee Evan You in 2014. Over the last several years, Vue has seen a substantial shift in popularity, even though it doesn’t have the backing of a large company. <br />

                    </p>
                </div>
            </div>

        </div>
    );
};

export default Blog;

