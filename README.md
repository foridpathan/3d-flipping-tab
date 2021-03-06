### 3d-flipping-tab

## Documentation

### Installation

**npm**

```bash
npm install 3dflippingtab --save
```

**yarn**

```bash
yarn add 3dflippingtab
```

### Example

```js
import React from "react";
import FlippingTab from '3dflippingtab';

function TabContent() {
    const flippingContent = [
        {
            id: 'tab1',
            nav: 'Priority Calling',
            content: 'assets/images/true-sc-1.png'
        },
        {
            id: 'tab2',
            nav: 'Analytics',
            content: 'assets/images/true-sc-3.png'
        },
        {
            id: 'tab3',
            nav: 'Call Reason',
            content: 'assets/images/true-sc-1.png'
        },
        {
            id: 'tab4',
            nav: 'Priority Calling',
            content: 'assets/images/true-sc-1.png'
        },
        {
            id: 'tab5',
            nav: 'Analytics',
            content: 'assets/images/true-sc-3.png'
        }
    ]

    return (
        <section className="tab-wrapper">
                <div className="container">
                    <FlippingTab tab={flippingContent} className="feature" options={{mobileFrame: true}} />
                </div>
        </section>
    );
}

export default TabContent;
```
