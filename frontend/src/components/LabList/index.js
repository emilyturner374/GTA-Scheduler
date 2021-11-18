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
    days: [''],
    startTime: '',
    startAmPm: '',
    endTime: '',
    endAmPm: '',
    //courseList: []
};

export default function LabList() {
    const [labs, setLabs] = useState([defaultLabVals]);
    
    function changeLabInfo(val, id, operation) {
        const newLabs = [...labs];
        const index = newLabs.findIndex(lab => lab.labId === id);
        
        switch(operation){
            case 'labName':
                newLabs[index].labName = val;
                break;
            case 'days':
                newLabs[index].days = val;
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
        console.log(labs.filter(lab => lab.labId !== val));
        return setLabs(prev=>prev.filter(lab => lab.labId !== val));
    }

    return(
        <LabContainer>
            <LabHeader>
                Lab List
            </LabHeader>
            <ContentWrap>
                {console.log("labs: ")}
                {console.log(labs)}
                {labs.map((lab) => {
                    const { labId,  
                            labName,
                            days,
                            startTime,
                            startAmPm,
                            endTime,
                            endAmPm,} = lab;
                    console.log(labs);

                    return(
                        <Lab
                            key = {labId}
                            labId = {labId}
                            labName = {labName}
                            days = {days}
                            startTime = {startTime}
                            startAmPm = {startAmPm}
                            endTime = {endTime}
                            endAmPm = {endAmPm}
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
                            days: [''],
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