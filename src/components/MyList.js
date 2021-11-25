import { useTranslation } from 'react-i18next';
import React, {Suspense} from 'react';

function MyList(props) {
    const { t, i18n } = useTranslation();
    const items = props.items;
//  className={items.clicked ? "myClass" : ""}
    const listItems = items.map((items) =>
    <li key={items.id} onClick={() => props.updateItem(items.id)}>
        {items.text}
    </li>
    );
    return (
        <div>
            <h1>{t("front-page-text")}</h1>
            <ol>
                {listItems}
            </ol>
        </div>
    );
  }
  

export default function App(props){
    return(
        
        <Suspense fallback="loading">
            <MyList {...props} />
        </Suspense>
    )
}