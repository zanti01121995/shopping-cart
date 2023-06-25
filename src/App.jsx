import logo from './logo.svg';
import './App.css';
import Cards from './pricecart';

function App() {
  return (
   <section className='pricing'>
    <div className='container'>
    <div className='row'>
    <Cards
    title="Free"
    price="$0"
    perMonth="/month"
    noOfUser="Single User"
    storageSize="5GB Storage"
    noOfProjects="Unlimited Public Projects"
    accessType="Community Access"
    project="Unlimited Private Projects"
    support="Dedicated Phone Support"
    domain="Free Subdomain"
    status="Monthly Status Reports"
   
    />
     <Cards
    title="Plus"
    price="$9"
    perMonth="/month"
    noOfUser="5 User"
    storageSize="50GB Storage"
    noOfProjects="Unlimited Public Projects"
    accessType="Community Access"
    project="Unlimited Private Projects"
    support="Dedicated Phone Support"
    domain="Free Subdomain"
    status="Monthly Status Reports"

    />
    <Cards
    title="Pro"
    price="$49"
    perMonth="/month"
    noOfUser="Unlimited User"
    storageSize="150GB Storage"
    noOfProjects="Unlimited Public Projects"
    accessType="Community Access"
    project="Unlimited Private Projects"
    support="Dedicated Phone Support"
    domain="Unlimited Free Subdomain"
    status="Monthly Status Reports"
 
    />
   
    </div>
    </div>

   </section>
  );
}

export default App;
