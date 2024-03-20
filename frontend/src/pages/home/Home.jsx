import MessageContainer from "../../components/messages/MessageContainer";
import Sidebar from "../../components/sidebar/Sidebar";

const Home = () => {
	const style = {
		"background-image": `url("/home.jpg")`,
		"background-repeat": "no-repeat",
        "background-size": "cover",
        "background-position": "center",
	}
	return (
		<div 
		style={style}
		className='flex sm:h-[500px] md:h-[600px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-2xl bg-opacity-0 opacity-1000'>
			<Sidebar />
			<MessageContainer />
		</div>
	);
};
export default Home;
