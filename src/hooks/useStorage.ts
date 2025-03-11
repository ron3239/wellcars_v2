import { MetaDataContext } from "@/components/Providers/ProviderStore"
import { _metaDate } from "@/types/metaDate"
import { useContext } from "react"


export const useStorage = ():_metaDate => {
    

      const storageContext = useContext(MetaDataContext)
    
      if (!storageContext) {
        return null

      }
      const { _metaDate, setMetaDate } = storageContext

      return _metaDate

}

