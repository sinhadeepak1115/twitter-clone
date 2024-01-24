import useCurrentUser from "@/hooks/useCurrentUser";
import useEditModal from "@/hooks/useEditModal";
import { useCallback, useEffect, useState } from "react";


const EditModal = () => {
  const { data: currnetUser } = useCurrentUser();
  const { mutate: mutateFetchUser } = useUser(currnetUser?.id)
  const editModal = useEditModal();

  const [profileImage, setProfileImage] = useState();
  const [coverImage, setCoverImage] = useState();
  const [name, setName] = useState();
  const [username, setUserName] = useState();
  const [bio, setBio] = useState();

  useEffect(() => {
    setProfileImage(currnetUser?.profileImage)
    setCoverImage(currnetUser?.coverImage)
    setName(currnetUser?.name)
    setUserName(currnetUser?.username)
    setBio(currnetUser?.bio)

  }, [currnetUser])

  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = useCallback(async () => {
    try {

    } catch (error) {
      toast
    }
  }, [])

  return (
    <div>EditModal</div>
  )
}

export default EditModal;
