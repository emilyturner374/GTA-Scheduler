import uniqid from 'uniqid';
import { useState } from 'react'
import Lab from '../../components/Lab';
import { LabContainer, 
        LabHeader,
        ContentWrap,
        AddLabBtn } 
        from './LabListElements';

const defaultLabVals = {
    //Make default mNumber a random number
    //so empty entries can still be deleted
    labId: uniqid(),
    labName: '',
    days: [],
    startTime: '',
    startAmPm: '',
    endTime: '',
    endAmPm: '',
};

export default function LabList(setLabList) {
    const [labs, setLabs] = useState([defaultLabVals]);
    
    function changeLabInfo(val, id, operation) {
        const newLabs = [...labs];
        const index = newLabs.findIndex(lab => lab.labId === id);

        switch(operation){
            case 'labName':
                newLabs[index].labName = val;
                break;
            case 'days':
                const dayIndex = newLabs[index].days.findIndex(day => day === val);
                if(dayIndex === -1){
                    newLabs[index].days.push(val);
                }
                else{
                    newLabs[index].days = [...newLabs[index].days.filter(day => day !== val)]
                }
                break;
            case 'startTime':
                newLabs[index].startTime = val;
                break;
            case 'startAmPm':
                newLabs[index].startAmPm = val;
                break;
            case 'endTime':
                newLabs[index].endTime = val;
                break;
            case 'endAmPm':
                newLabs[index].endAmPm = val;
                break;
            default:
                break;
        }
       
        setLabs(newLabs); 
        
    }

    function deleteLab(val){
        const newLabs = labs.filter(lab => lab.labId !== val);
       
        return setLabs(newLabs);
    }

    return(
        <LabContainer>
            <LabHeader>
                Lab List
            </LabHeader>
            <ContentWrap>
                {console.log("labs: ")}
                {console.log(labs)}
                {() => setLabList(labs)}
                {labs.map((lab) => {
                    const { labId,  
                            labName,
                            days,
                            startTime,
                            endTime,} = lab;

                    return(
                        <Lab
                            key = {labId}
                            labId = {labId}
                            labName = {labName}
                            days = {days}
                            startTime = {startTime}
                            endTime = {endTime}
                            changeLabInfo = {changeLabInfo}
                            deleteLab = {deleteLab}
                        />
                    );
                })}
                <AddLabBtn
                    type='button'
                    onClick={() => setLabs([ ...labs, 
                        {labId: uniqid(),
                            labName: '',
                            days: [],
                            startTime: '',
                            startAmPm: '',
                            endTime: '',
                            endAmPm: '',    
                        }
                    ])}
                >
                    Add lab
                </AddLabBtn>
            </ContentWrap>
        </LabContainer>
    );
};