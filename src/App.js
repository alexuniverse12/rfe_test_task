import { useLocation } from "react-router-dom";
import { useState, useMemo } from "react";
import styled from "styled-components";


// a bit of styling
const ColorsWrapper = styled.div`
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

` 
const ColorText = styled.h1`

`

function useQuery() {
  const { search } = useLocation();

  return useMemo(() => new URLSearchParams(search), [search]);
}

/// URL --- /colors?tags=purple,red.....

function App() {
  let query = useQuery();
  const [colors, setColors] = useState(query.get("tags").split(","))
  
  return (
    <ColorsWrapper>
      {colors.map((color) => {
        return (
          <ColorText>{color}</ColorText>
        )
      })}
    </ColorsWrapper>
  );
}

export default App;
