import React, { useState } from 'react'
import { styled } from '@mui/material/styles';
import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import useBaseUrl from '@docusaurus/useBaseUrl';

const StyledRoot = styled('div')({
  width: '90%'
});

const StyledResetButton = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
});

const StyledButtonContainer = styled('div')({
  direction: 'rtl',
  margin: '0% 4%',
});

const StyledButton = styled(Button)({
  textTransform: 'none',
  color: '#7f7f7f',
  '&.MuiButton-containedPrimary': {
    color: '#fff',
    backgroundColor: '#3EBBD3',
    margin: '1%',
  }
});

const StyledTypography = styled(Typography)({
  margin: '1% 5% 1%',
});

const CustomStepper = ({ Content }) => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <StyledRoot>
      <Stepper activeStep={activeStep} alternativeLabel>
        {Content.map((step, index) => (
            <Step key={index}>
              <StepLabel
                StepIconProps={{
                  sx: {
                    color: 'rgb(192 192 192)',
                    '&.MuiStepIcon-active': {
                      color: '#3EBBD3'
                    },
                    '&.MuiStepIcon-completed': {
                      color: '#82B982'
                    }
                  }
                }}
              >
               { step.title && step.title }
              </StepLabel>
            </Step>
          )
        )}
      </Stepper>
      <div>
        {activeStep === Content.length ? (
          <StyledResetButton>
            <StyledButton onClick={handleReset}>
              Reset
            </StyledButton>
          </StyledResetButton>
        ) : (
          <div>
            <StyledTypography>
              {Content[activeStep].instruction}
            </StyledTypography>
            <StyledTypography component="div">
              <img src={useBaseUrl(Content[activeStep].imageSrc)} loading="lazy"/>
            </StyledTypography>
            <StyledButtonContainer>
              <StyledButton
                variant="contained"
                color="primary"
                onClick={handleNext}
                href={Content[activeStep].href}
              >
                {activeStep === Content.length - 1 ? 'Finish' : 'Next'}
              </StyledButton>
              <StyledButton
                disabled={!activeStep}
                onClick={handleBack}
              >
                Back
              </StyledButton>
            </StyledButtonContainer>
          </div>
        )}
      </div>
    </StyledRoot>
  )
}

export default CustomStepper