import { useState, useEffect } from "react"
import axios from "axios"

export default function useUserRestrictions() {
  const [userRestrictions, setUserRestrictions] = useState({
    healthTags: ["SUGAR_CONSCIOUS", "PEANUT_FREE", "TREE_NUT_FREE", "ALCOHOL_FREE", "STONE_FREE"],
    dietTags: []
  });

return userRestrictions
}
