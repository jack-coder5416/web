import { Tree, TreeNode } from 'react-organizational-chart';
import OrgCard from '../components/OrgCard';
import { ScientistE, ScientistF, TechnicalOfficer } from '../assets';
import Footer from '../components/Footer';

const EmployeePage = () => {
  return (
    <div className='flex flex-col mt-[4%] '>
      <Tree label={<OrgCard post={`Director/Scientist - 'G'`} name='A.V Rathore'/>}>
        <TreeNode label={<OrgCard post={`Scientist - 'F'`} name='Alok Sharma' url={ScientistF}/>}>
          <TreeNode label={<OrgCard post={`Scientist - 'E'`} name='M.S Chakraborti' url={ScientistE}/>}>
            <TreeNode label={<OrgCard post={`Technical Officer`} name='Ashwini Kumar' url={TechnicalOfficer}/>}>
               
            </TreeNode>
          </TreeNode>
          
        </TreeNode>
        <TreeNode label= {<OrgCard post={`Scientist - 'F'`} name='Nitin Verma' url={ScientistF}/>}>
          <TreeNode label={<OrgCard post={`Scientist - 'E'`} name='Srinivasa Murthy' url={ScientistE}/>}>
            <TreeNode label={<OrgCard post={`Technical Officer`} name='Gopal Narayana' url={TechnicalOfficer}/>}>
             
            </TreeNode> 
          </TreeNode>
        </TreeNode>
      </Tree>
      <Footer/>
    </div>
  )
}

export default EmployeePage