import { createContext, useState } from "react";

export const NewsContext = createContext();
export const AboutContext = createContext();

export const ContextProvider = ({ children }) => {
  const [news, setNews] = useState([
    {
      id: 0,
      title: "News Title 1",
      image: "/image/newsBanner.jpg",
      captions: "Dokumentasi pribadi",
      date: "29/03/2023, 21:07 WIB",
      text: "This Section Under Development",
      article:
        "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu mi euismod, egestas tellus eu, volutpat dui. Duis laoreet eros eget quam ultrices luctus. Integer aliquam vehicula quam nec imperdiet. Etiam sit amet aliquet purus. Fusce id mauris tempor, mollis mi ut, maximus nisi. Aliquam tincidunt diam felis, ac consectetur tortor facilisis sit amet. Sed luctus suscipit fringilla. Cras vulputate, purus pellentesque aliquam accumsan, nisi est faucibus nunc, vel tempus leo quam at ante. Aenean pellentesque bibendum orci quis tristique. Nam et tempor augue. Nullam at eros at leo vestibulum mattis eget eget mi. Donec mattis elit in bibendum accumsan. Nulla vel enim ullamcorper, venenatis arcu in, suscipit magna. Nam sit amet turpis fringilla est interdum pulvinar. Maecenas sit amet urna sed sem luctus suscipit. Duis hendrerit ligula dolor, eget feugiat ex lacinia laoreet.</p><p>Donec malesuada lacus diam, ut fringilla urna elementum eu. Curabitur nec volutpat massa. Aliquam in ultricies orci, sed fringilla nibh. Quisque sit amet augue ex. Vestibulum id tempus massa, a accumsan mauris. Etiam pulvinar nisi id mollis iaculis. Suspendisse potenti. Duis sit amet ligula vitae sem egestas feugiat. Praesent magna mi, cursus non felis at, convallis efficitur mi. Mauris efficitur convallis augue, nec placerat ligula lacinia vitae.</p><p>Fusce convallis mi at faucibus porta. Etiam vitae lacus finibus, mattis neque id, iaculis enim. Duis mattis lorem feugiat nunc fermentum, vel viverra libero faucibus. Cras placerat turpis odio, non pharetra nunc pharetra ut. Aenean eu dolor ut eros vehicula vulputate at sed eros. Nullam luctus ex ligula, in consectetur erat facilisis at. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris rhoncus, orci eu auctor sagittis, nisl est dapibus leo, a consequat ex ante eu dui.</p>",
    },
    {
      id: 1,
      title: "News Title 2",
      image: "/image/newsBanner.jpg",
      captions: "Dokumentasi pribadi",
      date: "31/03/2023, 21:07 WIB",
      text: "This Section Under Development",
      article:
        "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu mi euismod, egestas tellus eu, volutpat dui. Duis laoreet eros eget quam ultrices luctus. Integer aliquam vehicula quam nec imperdiet. Etiam sit amet aliquet purus. Fusce id mauris tempor, mollis mi ut, maximus nisi. Aliquam tincidunt diam felis, ac consectetur tortor facilisis sit amet. Sed luctus suscipit fringilla. Cras vulputate, purus pellentesque aliquam accumsan, nisi est faucibus nunc, vel tempus leo quam at ante. Aenean pellentesque bibendum orci quis tristique. Nam et tempor augue. Nullam at eros at leo vestibulum mattis eget eget mi. Donec mattis elit in bibendum accumsan. Nulla vel enim ullamcorper, venenatis arcu in, suscipit magna. Nam sit amet turpis fringilla est interdum pulvinar. Maecenas sit amet urna sed sem luctus suscipit. Duis hendrerit ligula dolor, eget feugiat ex lacinia laoreet.</p><p>Donec malesuada lacus diam, ut fringilla urna elementum eu. Curabitur nec volutpat massa. Aliquam in ultricies orci, sed fringilla nibh. Quisque sit amet augue ex. Vestibulum id tempus massa, a accumsan mauris. Etiam pulvinar nisi id mollis iaculis. Suspendisse potenti. Duis sit amet ligula vitae sem egestas feugiat. Praesent magna mi, cursus non felis at, convallis efficitur mi. Mauris efficitur convallis augue, nec placerat ligula lacinia vitae.</p><p>Fusce convallis mi at faucibus porta. Etiam vitae lacus finibus, mattis neque id, iaculis enim. Duis mattis lorem feugiat nunc fermentum, vel viverra libero faucibus. Cras placerat turpis odio, non pharetra nunc pharetra ut. Aenean eu dolor ut eros vehicula vulputate at sed eros. Nullam luctus ex ligula, in consectetur erat facilisis at. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris rhoncus, orci eu auctor sagittis, nisl est dapibus leo, a consequat ex ante eu dui.</p>",
    },
    {
      id: 2,
      title: "News Title 3",
      image: "/image/newsBanner.jpg",
      captions: "Dokumentasi pribadi",
      date: "31/03/2023, 21:07 WIB",
      text: "This Section Under Development",
      article:
        "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu mi euismod, egestas tellus eu, volutpat dui. Duis laoreet eros eget quam ultrices luctus. Integer aliquam vehicula quam nec imperdiet. Etiam sit amet aliquet purus. Fusce id mauris tempor, mollis mi ut, maximus nisi. Aliquam tincidunt diam felis, ac consectetur tortor facilisis sit amet. Sed luctus suscipit fringilla. Cras vulputate, purus pellentesque aliquam accumsan, nisi est faucibus nunc, vel tempus leo quam at ante. Aenean pellentesque bibendum orci quis tristique. Nam et tempor augue. Nullam at eros at leo vestibulum mattis eget eget mi. Donec mattis elit in bibendum accumsan. Nulla vel enim ullamcorper, venenatis arcu in, suscipit magna. Nam sit amet turpis fringilla est interdum pulvinar. Maecenas sit amet urna sed sem luctus suscipit. Duis hendrerit ligula dolor, eget feugiat ex lacinia laoreet.</p><p>Donec malesuada lacus diam, ut fringilla urna elementum eu. Curabitur nec volutpat massa. Aliquam in ultricies orci, sed fringilla nibh. Quisque sit amet augue ex. Vestibulum id tempus massa, a accumsan mauris. Etiam pulvinar nisi id mollis iaculis. Suspendisse potenti. Duis sit amet ligula vitae sem egestas feugiat. Praesent magna mi, cursus non felis at, convallis efficitur mi. Mauris efficitur convallis augue, nec placerat ligula lacinia vitae.</p><p>Fusce convallis mi at faucibus porta. Etiam vitae lacus finibus, mattis neque id, iaculis enim. Duis mattis lorem feugiat nunc fermentum, vel viverra libero faucibus. Cras placerat turpis odio, non pharetra nunc pharetra ut. Aenean eu dolor ut eros vehicula vulputate at sed eros. Nullam luctus ex ligula, in consectetur erat facilisis at. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris rhoncus, orci eu auctor sagittis, nisl est dapibus leo, a consequat ex ante eu dui.</p>",
    },
    {
      id: 3,
      title: "News Title 4",
      image: "/image/newsBanner.jpg",
      captions: "Dokumentasi pribadi",
      date: "31/03/2023, 21:07 WIB",
      text: "This Section Under Development",
      article:
        "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu mi euismod, egestas tellus eu, volutpat dui. Duis laoreet eros eget quam ultrices luctus. Integer aliquam vehicula quam nec imperdiet. Etiam sit amet aliquet purus. Fusce id mauris tempor, mollis mi ut, maximus nisi. Aliquam tincidunt diam felis, ac consectetur tortor facilisis sit amet. Sed luctus suscipit fringilla. Cras vulputate, purus pellentesque aliquam accumsan, nisi est faucibus nunc, vel tempus leo quam at ante. Aenean pellentesque bibendum orci quis tristique. Nam et tempor augue. Nullam at eros at leo vestibulum mattis eget eget mi. Donec mattis elit in bibendum accumsan. Nulla vel enim ullamcorper, venenatis arcu in, suscipit magna. Nam sit amet turpis fringilla est interdum pulvinar. Maecenas sit amet urna sed sem luctus suscipit. Duis hendrerit ligula dolor, eget feugiat ex lacinia laoreet.</p><p>Donec malesuada lacus diam, ut fringilla urna elementum eu. Curabitur nec volutpat massa. Aliquam in ultricies orci, sed fringilla nibh. Quisque sit amet augue ex. Vestibulum id tempus massa, a accumsan mauris. Etiam pulvinar nisi id mollis iaculis. Suspendisse potenti. Duis sit amet ligula vitae sem egestas feugiat. Praesent magna mi, cursus non felis at, convallis efficitur mi. Mauris efficitur convallis augue, nec placerat ligula lacinia vitae.</p><p>Fusce convallis mi at faucibus porta. Etiam vitae lacus finibus, mattis neque id, iaculis enim. Duis mattis lorem feugiat nunc fermentum, vel viverra libero faucibus. Cras placerat turpis odio, non pharetra nunc pharetra ut. Aenean eu dolor ut eros vehicula vulputate at sed eros. Nullam luctus ex ligula, in consectetur erat facilisis at. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris rhoncus, orci eu auctor sagittis, nisl est dapibus leo, a consequat ex ante eu dui.</p>",
    },
    {
      id: 4,
      title: "News Title 5",
      image: "/image/gallery/IMG-20220410-WA0007.jpg",
      captions: "Dokumentasi pribadi",
      date: "31/03/2023, 21:07 WIB",
      text: "This Section Under Development",
      article:
        "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu mi euismod, egestas tellus eu, volutpat dui. Duis laoreet eros eget quam ultrices luctus. Integer aliquam vehicula quam nec imperdiet. Etiam sit amet aliquet purus. Fusce id mauris tempor, mollis mi ut, maximus nisi. Aliquam tincidunt diam felis, ac consectetur tortor facilisis sit amet. Sed luctus suscipit fringilla. Cras vulputate, purus pellentesque aliquam accumsan, nisi est faucibus nunc, vel tempus leo quam at ante. Aenean pellentesque bibendum orci quis tristique. Nam et tempor augue. Nullam at eros at leo vestibulum mattis eget eget mi. Donec mattis elit in bibendum accumsan. Nulla vel enim ullamcorper, venenatis arcu in, suscipit magna. Nam sit amet turpis fringilla est interdum pulvinar. Maecenas sit amet urna sed sem luctus suscipit. Duis hendrerit ligula dolor, eget feugiat ex lacinia laoreet.</p><p>Donec malesuada lacus diam, ut fringilla urna elementum eu. Curabitur nec volutpat massa. Aliquam in ultricies orci, sed fringilla nibh. Quisque sit amet augue ex. Vestibulum id tempus massa, a accumsan mauris. Etiam pulvinar nisi id mollis iaculis. Suspendisse potenti. Duis sit amet ligula vitae sem egestas feugiat. Praesent magna mi, cursus non felis at, convallis efficitur mi. Mauris efficitur convallis augue, nec placerat ligula lacinia vitae.</p><p>Fusce convallis mi at faucibus porta. Etiam vitae lacus finibus, mattis neque id, iaculis enim. Duis mattis lorem feugiat nunc fermentum, vel viverra libero faucibus. Cras placerat turpis odio, non pharetra nunc pharetra ut. Aenean eu dolor ut eros vehicula vulputate at sed eros. Nullam luctus ex ligula, in consectetur erat facilisis at. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris rhoncus, orci eu auctor sagittis, nisl est dapibus leo, a consequat ex ante eu dui.</p>",
    },
    {
      id: 5,
      title: "News Title 6",
      image: "/image/gallery/IMG_20221023_102706.jpg",
      captions: "Dokumentasi pribadi",
      date: "31/03/2023, 21:07 WIB",
      text: "This Section Under Development",
      article:
        "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu mi euismod, egestas tellus eu, volutpat dui. Duis laoreet eros eget quam ultrices luctus. Integer aliquam vehicula quam nec imperdiet. Etiam sit amet aliquet purus. Fusce id mauris tempor, mollis mi ut, maximus nisi. Aliquam tincidunt diam felis, ac consectetur tortor facilisis sit amet. Sed luctus suscipit fringilla. Cras vulputate, purus pellentesque aliquam accumsan, nisi est faucibus nunc, vel tempus leo quam at ante. Aenean pellentesque bibendum orci quis tristique. Nam et tempor augue. Nullam at eros at leo vestibulum mattis eget eget mi. Donec mattis elit in bibendum accumsan. Nulla vel enim ullamcorper, venenatis arcu in, suscipit magna. Nam sit amet turpis fringilla est interdum pulvinar. Maecenas sit amet urna sed sem luctus suscipit. Duis hendrerit ligula dolor, eget feugiat ex lacinia laoreet.</p><p>Donec malesuada lacus diam, ut fringilla urna elementum eu. Curabitur nec volutpat massa. Aliquam in ultricies orci, sed fringilla nibh. Quisque sit amet augue ex. Vestibulum id tempus massa, a accumsan mauris. Etiam pulvinar nisi id mollis iaculis. Suspendisse potenti. Duis sit amet ligula vitae sem egestas feugiat. Praesent magna mi, cursus non felis at, convallis efficitur mi. Mauris efficitur convallis augue, nec placerat ligula lacinia vitae.</p><p>Fusce convallis mi at faucibus porta. Etiam vitae lacus finibus, mattis neque id, iaculis enim. Duis mattis lorem feugiat nunc fermentum, vel viverra libero faucibus. Cras placerat turpis odio, non pharetra nunc pharetra ut. Aenean eu dolor ut eros vehicula vulputate at sed eros. Nullam luctus ex ligula, in consectetur erat facilisis at. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris rhoncus, orci eu auctor sagittis, nisl est dapibus leo, a consequat ex ante eu dui.</p>",
    },
    {
      id: 6,
      title: "News Title 7",
      image: "/image/gallery/P1010597.JPG",
      captions: "Dokumentasi pribadi",
      date: "31/03/2023, 21:07 WIB",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu mi euismod, egestas tellus eu, volutpat dui. Duis laoreet eros eget quam ultrices luctus.Integer aliquam vehicula quam nec imperdiet. Etiam sit amet aliquet purus.",
      article:
        "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu mi euismod, egestas tellus eu, volutpat dui. Duis laoreet eros eget quam ultrices luctus. Integer aliquam vehicula quam nec imperdiet. Etiam sit amet aliquet purus. Fusce id mauris tempor, mollis mi ut, maximus nisi. Aliquam tincidunt diam felis, ac consectetur tortor facilisis sit amet. Sed luctus suscipit fringilla. Cras vulputate, purus pellentesque aliquam accumsan, nisi est faucibus nunc, vel tempus leo quam at ante. Aenean pellentesque bibendum orci quis tristique. Nam et tempor augue. Nullam at eros at leo vestibulum mattis eget eget mi. Donec mattis elit in bibendum accumsan. Nulla vel enim ullamcorper, venenatis arcu in, suscipit magna. Nam sit amet turpis fringilla est interdum pulvinar. Maecenas sit amet urna sed sem luctus suscipit. Duis hendrerit ligula dolor, eget feugiat ex lacinia laoreet.</p><p>Donec malesuada lacus diam, ut fringilla urna elementum eu. Curabitur nec volutpat massa. Aliquam in ultricies orci, sed fringilla nibh. Quisque sit amet augue ex. Vestibulum id tempus massa, a accumsan mauris. Etiam pulvinar nisi id mollis iaculis. Suspendisse potenti. Duis sit amet ligula vitae sem egestas feugiat. Praesent magna mi, cursus non felis at, convallis efficitur mi. Mauris efficitur convallis augue, nec placerat ligula lacinia vitae.</p><p>Fusce convallis mi at faucibus porta. Etiam vitae lacus finibus, mattis neque id, iaculis enim. Duis mattis lorem feugiat nunc fermentum, vel viverra libero faucibus. Cras placerat turpis odio, non pharetra nunc pharetra ut. Aenean eu dolor ut eros vehicula vulputate at sed eros. Nullam luctus ex ligula, in consectetur erat facilisis at. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris rhoncus, orci eu auctor sagittis, nisl est dapibus leo, a consequat ex ante eu dui.</p>",
    },
  ]);

  const [about, setAbout] = useState({
    about: {
      team: "",
      logo: "",
      banner: "",
      description: "",
    },
    visi: "",
    misi: [],
    pengurus: [
      {
        jabatan: "",
        nama: "",
        jurusan: "",
        foto: "",
        social: [],
      },
    ],
    teams: [
      {
        uri: "",
        logo: "",
        nama: "",
      },
    ],
  });

  return (
    <NewsContext.Provider value={{ news, setNews }}>
      <AboutContext.Provider value={{ about, setAbout }}>
        {children}
      </AboutContext.Provider>
    </NewsContext.Provider>
  );
};
