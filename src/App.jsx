import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import CreatePost from "./components/CreatePost";
import PostList from "./components/PostList";
import { useState } from "react";
import PostListProvider from "./store/post-list-store";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./components/login";
import LogoutButton from "./components/logout";

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");
  const { user, isAuthenticated, isLoading } = useAuth0();

  return <>
    <PostListProvider>
      {/* <div style={{display:'flex',flexDirection:'row-reverse',margin:'10px'}}><LogoutButton></LogoutButton></div> */}
      <div style={{backgroundColor:'#80c8ce'}} className="app-container">
        <Sidebar
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        ></Sidebar>
        <div className="content">
          <Header></Header>
          {selectedTab === "Home" ? (
            <PostList></PostList>
          ) : (
            <CreatePost></CreatePost>
          )}
          <Footer></Footer>
        </div>
      </div>
    </PostListProvider>
    </>
}

export default App;
