import { BsXCircle } from 'react-icons/bs';
import {LabInfoWrap,
        LabInfo,
        InputBox,
        TimeWrap,
        TimeBox,
        TimeInput,
        AmPmSelect,
        DaysWrap,
        DayBtn, }
        from './LabElements'

export default function Lab(){    
    return(
        <LabInfoWrap>
            <LabInfo>
                <InputBox defaultValue="Lab name"/>
                <DaysWrap>
                    <DayBtn>Mon</DayBtn>
                    <DayBtn>Tue</DayBtn>
                    <DayBtn>Wed</DayBtn>
                    <DayBtn>Thu</DayBtn>
                    <DayBtn>Fri</DayBtn>
                </DaysWrap>
                <TimeWrap>
                    <TimeBox>
                        <TimeInput defaultValue="10:00"/>
                        <AmPmSelect>
                            <option value="am">am</option>
                            <option value="pm">pm</option>
                        </AmPmSelect>
                    </TimeBox>
                    to
                    <TimeBox>
                        <TimeInput defaultValue="10:30"/>
                        <AmPmSelect>
                            <option value="am">am</option>
                            <option value="pm">pm</option>
                        </AmPmSelect>
                    </TimeBox>
                </TimeWrap>
                <BsXCircle color="#357bb8" min-height="30px" min-width="30px"/>
            </LabInfo>
        </LabInfoWrap>
    );
}