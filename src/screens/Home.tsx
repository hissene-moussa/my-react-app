
import { About } from '../components/About';
import { YouTubeVideo } from '../components/YoutubeVideo';
import { SocialLinks } from '../components/SocialLinks';
export const Home = () => {
    return (
    <main>
        <h1>Bienvenue dans mon monde.</h1>
        <About/>
        <YouTubeVideo id = "U_Y2AhAVs8U?si=dtSc4U8duC_M7djB"/>
        <SocialLinks/>
    </main>
    );
}