import { Fab } from "@material-ui/core";
import { SidebarFooterContainer } from "../CreateGroup/CreateGroup.styles";
import ArrowForward from "@material-ui/icons/ArrowForward";
import { IChip } from "../CreateGroup/CreateGroup";

interface props {
  storedChips?: IChip[];
  handleNextBtn: () => void;
}

function NextStepBtn({ storedChips, handleNextBtn }: props) {
  return (
    <SidebarFooterContainer>
      {/* NOTE: display button if length is greater than 0 */}
      {storedChips!.length > 0 && (
        <Fab
          onClick={handleNextBtn}
          size="medium"
          aria-label="next"
          style={{ backgroundColor: "#09E85E", color: "#fff" }}
        >
          <ArrowForward />
        </Fab>
      )}
    </SidebarFooterContainer>
  );
}

export default NextStepBtn;
