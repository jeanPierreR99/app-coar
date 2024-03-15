import { QRCode } from "antd";
import app from "./ConectionFirebase";
import {
  collection,
  query,
  where,
  getDocs,
  getFirestore,
  addDoc,
  doc,
  deleteDoc,
  updateDoc,
  onSnapshot,
  arrayUnion,
  getDoc,
  limit,
  startAfter,
  orderBy,
} from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

const storage = getStorage(app);
const firestore = getFirestore(app);

const postsCollection = collection(firestore, "posts");
const filesCollection = collection(firestore, "files");
const studentCollection = collection(firestore, "students");
const userCollection = collection(firestore, "users");
const teacherCollection = collection(firestore, "teachers");
const adminCollection = collection(firestore, "adminCollection");

const currentDate = new Date();
const formattedDate = currentDate.toLocaleString();

// ----------------------storage firebase--------------------------
export const createFileStorage = async (file, userLog) => {
  const imageRef = ref(storage, `${userLog.user}/${file.name}`);
  await uploadBytes(imageRef, file);
  console.log("aqui");
  return await getDownloadURL(imageRef);
};

// ----------------collection posts------------------------------------------
export const createCollectionPost = async (description, url, userLog) => {
  try {
    const docRef = await addDoc(postsCollection, {
      user_id: userLog.id,
      post_description: description,
      post_image_url: url,
      post_date: formattedDate,
    });

    await updateDoc(doc(postsCollection, docRef.id), {
      post_id: docRef.id,
    });

    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
};

export const createCollectionFile = async (description, url, userLog) => {
  try {
    const docRef = await addDoc(filesCollection, {
      user_id: userLog.id,
      file_description: description,
      file_image_url: url,
      file_date: formattedDate,
    });

    await updateDoc(doc(filesCollection, docRef.id), {
      file_id: docRef.id,
    });

    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
};

export const addCommentToPost = async (postId, newComment) => {
  try {
    // Obtener referencia al documento del post
    const postRef = doc(postsCollection, postId);

    // Actualizar el documento del post para agregar el nuevo comentario al array de comentarios
    await updateDoc(postRef, {
      comments: arrayUnion(newComment),
    });

    return true;
  } catch (e) {
    console.error(e);
    return false;
  }
};

export const getCollectionPost = async (setCollectionPost, userLog) => {
  var id = userLog.id || userLog;
  const q = query(postsCollection, where("user_id", "==", id));
  const unsubscribe = onSnapshot(q, (querySnapshot) => {
    const posts = [];
    querySnapshot.forEach((doc) => {
      const val = doc.data();
      posts.push(val);
    });
    console.log("cambio en tiempo real");
    setCollectionPost(posts);
  });
  return unsubscribe; // Devuelve la función de cancelación para detener la suscripción cuando sea necesario
};

export const getCollectionFile = async (setCollectionFile, userLog) => {
  var id = userLog.id || userLog;
  const q = query(filesCollection, where("user_id", "==", id));
  const unsubscribe = onSnapshot(q, (querySnapshot) => {
    const files = [];
    querySnapshot.forEach((doc) => {
      const val = doc.data();
      files.push(val);
    });
    console.log("cambio en tiempo real");
    setCollectionFile(files);
  });
  return unsubscribe; // Devuelve la función de cancelación para detener la suscripción cuando sea necesario
};

export const getCollectionPostLimit = async (setCollectionPost, lim = null) => {
  let q = query(postsCollection);

  if (lim !== null) {
    q = query(q, limit(lim));
  }

  const unsubscribe = onSnapshot(q, (querySnapshot) => {
    const posts = [];
    console.log(querySnapshot)
    querySnapshot.forEach((doc) => {
      const val = doc.data();
      posts.push(val);
    });
    console.log("cambio en tiempo real");
    setCollectionPost(posts);
  });

  return unsubscribe; // Devuelve la función de cancelación para detener la suscripción cuando sea necesario
};

export const getDataOnScroll = async (data, setData, lim = null) => {
  // console.log(data)
  try {
    const lastVisible = data[data.length - 1]?.post_date;
    console.log(lastVisible)
    let q = query(
      postsCollection,
      orderBy("post_date"),
      startAfter(lastVisible),
      limit(lim)
    );

    const querySnapshot = await getDocs(q);

    const posts = [];
    querySnapshot.forEach((doc) => {
      console.log(doc.data());
      const val = doc.data();
      posts.push(val);
    });
    console.log("Datos cargados después de cierta cantidad");
    setData((prevPosts) => [...prevPosts, ...posts]);
    console.log(posts);
  } catch (error) {
    console.error("Error fetching more data: ", error);
  }
};

// -----------------------collection user------------------------------------------

export const createCollectionUser = async (type, user, url) => {
  console.log(user);
  if (type == "student") {
    try {
      user.user_url_avatar = url;
      user.user_role = "student";
      user.user_status = true;

      const docRef = await addDoc(userCollection, user);

      await updateDoc(doc(userCollection, docRef.id), {
        user_id: docRef.id,
      });
      return true;
    } catch (e) {
      console.log(e);
      return false;
    }
  } else {
    try {
      user.user_url_avatar = url;
      user.user_role = "teacher";
      user.user_status = true;

      const docRef = await addDoc(userCollection, user);

      await updateDoc(doc(userCollection, docRef.id), {
        user_id: docRef.id,
      });
      return true;
    } catch (e) {
      console.log(e);
      return false;
    }
  }
};
export const getCollectionUser = async (type, setCollection) => {
  const q = query(userCollection, where("user_role", "==", type));

  const unsubscribe = onSnapshot(q, (querySnapshot) => {
    const user = [];
    querySnapshot.forEach((doc) => {
      const val = doc.data();
      user.push(val);
    });
    setCollection(user);
  });
  return unsubscribe;
};

export const getCollectionUserOne = async (id, setUserOne) => {
  const q = query(userCollection, where("user_id", "==", id));

  const unsubscribe = onSnapshot(q, (querySnapshot) => {
    const user = [];
    querySnapshot.forEach((doc) => {
      const val = doc.data();
      user.push(val);
    });
    console.log(user);
    setUserOne(user);
  });
  return unsubscribe;
};

export const getCollectionAllUser = async (setData) => {
  const q = query(userCollection, where("user_role", "==", "teacher"));
  const unsubscribe = onSnapshot(q, (querySnapshot) => {
    const user = [];
    querySnapshot.forEach((doc) => {
      const val = doc.data();
      user.push(val);
    });
    setData(user);
    console.log(user);
  });
  return unsubscribe;
};

// -----------------------------------------other-------------------------------------------------

export const getNameUser = async () => {
  const q = query(
    studentCollection,
    where("user_id", "==", userStorageParse.id)
  );

  const querySnapshot = await getDocs(q);
  var name = "";
  if (!querySnapshot.empty) {
    querySnapshot.forEach((doc) => {
      const val = doc.data();
      name = val.user_user;
    });
    return name;
  } else {
    console.log("no hay post");
  }
};

export const deleteCollection = async (nameCollection, idDrop) => {
  console.log(nameCollection);
  console.log(idDrop);
  const ref = doc(getFirestore(), nameCollection, idDrop);
  try {
    await deleteDoc(ref);
    return true;
  } catch (error) {
    console.error("Error al eliminar usuario:", error.message);
  }
};

export const getUser = async (idUsuario) => {
  const db = getFirestore();
  const usuariosRef = collection(db, "users");
  const usuarioDoc = doc(usuariosRef, idUsuario);

  const snapshot = await getDoc(usuarioDoc);
  if (snapshot.exists()) {
    const datosUsuario = snapshot.data();
    console.log(datosUsuario.user_name);
    return await datosUsuario.user_name; // Ajusta el nombre del campo según tu esquema de datos
  } else {
    return "Usuario no encontrado";
  }
};
