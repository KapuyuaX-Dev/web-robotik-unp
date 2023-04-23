import { createContext, useState } from "react";

export const NewsContext = createContext()

export const ContextProvider = ({children}) =>{
    const [news, setNews] = useState([
        {
          id :0,
          title:'News Title',
          date: '29/03/2023, 21:07 WIB',
          text: "This Section Under Development"
        },
        {
          id :1,
          title:'News Title',
          date: '31/03/2023, 21:07 WIB',
          text: "This Section Under Development"
        }
        ,
        {
          id :2,
          title:'News Title',
          date: '31/03/2023, 21:07 WIB',
          text: "This Section Under Development"
        },
        {
          id :3,
          title:'News Title',
          date: '31/03/2023, 21:07 WIB',
          text: "This Section Under Development"
        }
        ,
        {
          id :4,
          title:'News Title',
          date: '31/03/2023, 21:07 WIB',
          text: "This Section Under Development"
        }
        ])

    return(
    <NewsContext.Provider value = {{news,setNews}}>
        {children}
    </NewsContext.Provider>
    )
}