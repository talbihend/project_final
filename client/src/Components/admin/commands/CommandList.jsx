import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getCommand } from '../../../redux/actions/commandActions';
import CommandCard from './CommandCard';
import "./commandList.css"

const CommandList = () => {
    const { commands, loading } = useSelector((state) => state.commandReducer);
    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(getCommand());
    }, []);
    
  
  
    return (
      <div>
          <h1  className='title-adm-scr'>Command List</h1>

          <div className='cmd-list-form'>
  
          {loading ? (
          <h1>Loading ...</h1> ) :  
        
        (
          commands && React.Children.toArray(commands.map((el) => <CommandCard command={el} />))
        )}
  </div>
          
    </div>
  )
}

export default CommandList