
import Hero from '../components/Hero';
import TryOnFeature from '@/components/TryOnFeature';
import Categories from '../components/Categories';
import PopularProducts from '../components/PopularProducts';
import Promotions from '../components/Promotions';
import ProductPage from '../components/ProductPage'; // Import ProductPage
import Chatbot from '../components/Chatbot'; // Import the Chatbot Component
import FeedbackSection from '@/components/FeedbackSection';

const Home: React.FC = () => {
  

  return (
    <main className="bg-white text-gray-800">
      <Hero />
      <Categories />
      <PopularProducts />
      <Promotions />
      <TryOnFeature />
      <section className="bg-gray-100 py-10">
        <ProductPage />
        <FeedbackSection/>
      </section>
      <Chatbot />
    </main>
  );
};

export default Home;
