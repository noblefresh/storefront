import useToggleState from "@lib/hooks/use-toggle-state"
import { searchClient, SEARCH_INDEX_NAME } from "@lib/search-client"
import Modal from "@modules/common/components/modal"
import Search from "@modules/common/icons/search"
import DesktopHit from "@modules/search/components/desktop-hit"
import DesktopHits from "@modules/search/components/desktop-hits"
import SearchBox from "@modules/search/components/search-box"
import { InstantSearch } from "react-instantsearch-hooks-web"
// import "./app"
const DesktopSearchModal = () => {
  const { state, close, open } = useToggleState()

  return (
    <>
      <button onClick={open} className="flex items-center gap-x-2 h-full">
        <Search />
        Search
      </button>

      <Modal isOpen={state} close={close} size="large">
        <Modal.Body>
          
            <div className="flex flex-col h-full">
             

              <div className="overflow-y-scroll flex-1 no-scrollbar mt-6">
                <div id="autocomplete"></div>
              </div>
            </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
export default DesktopSearchModal
