import React, { useState } from "react";
import { List, Avatar, Button, Input, Select, Space } from "antd";
import { CommentOutlined, UserOutlined } from "@ant-design/icons";

const ProfilePublication = ({userPost, urlPhoto ,urlPost, comentario}) => {
  const [comments, setComments] = useState(comentario);
  const [commentValue, setCommentValue] = useState("");
  const [visibleComments, setVisibleComments] = useState(4);
  const [commentsVisible, setCommentsVisible] = useState(false);
  const handleCommentChange = (e) => {
    setCommentValue(e.target.value);
  };
console.log(comentario)
  const handleAddComment = () => {
    if (commentValue.trim() !== "") {
      setComments((prevComments) => [
        ...prevComments,
        {
          author: "Usuario",
          content: commentValue,
          datetime: new Date().toLocaleString(),
        },
      ]);
      setCommentValue("");
    }
  };

  const handleLoadMoreComments = () => {
    setVisibleComments((prevVisibleComments) => prevVisibleComments + 4);
  };

  const visibleCommentsData = comments.slice(0, visibleComments);

  return (
    <div
      style={{background:"white", borderRadius:"6px",padding: "15px", marginBottom:"15px" }}
    >
      <List.Item
        key="post"
        extra={
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <img
                style={{ width: "60px", height: "60px", borderRadius: "50%" }}
                src={urlPhoto}
                alt="image perfil"
              />
              <div>
                <p style={{ color: "blue", cursor: "pointer" }}>
                  {userPost}
                </p>
                <p style={{ color: "#a7a7a7" }}>15 de enero del 2024</p>
              </div>
            </div>
            <p>
              ¡Hola a todos! ¡Hoy tuve una experiencia increíble explorando
              nuevas tecnologías en la conferencia de desarrollo! 🚀 #Desarrollo
              #Aprendizaje. Estoy emocionado por implementar lo que aprendí en
              mis proyectos. ¿Alguien más estuvo en la conferencia? ¡Compartan
              sus experiencias!
            </p>
            <img
              src={urlPost}
              alt="Imagen de la publicación"
              style={{ width: "100%", height: "400px", marginBottom: "16px" }}
            />
          </div>
        }
        avatar={<Avatar icon={<UserOutlined />} />}
      />
      <p
        style={{
          textAlign: "center",
          cursor: "pointer",
          color: "blue",
          opacity: ".6",
        }}
        type="primary"
        onClick={() => setCommentsVisible(!commentsVisible)}
      >
        <CommentOutlined></CommentOutlined>{" "}
        {commentsVisible ? "Ocultar comentarios" : "Mostrar comentarios"}
      </p>

      {commentsVisible && (
        <List
          dataSource={visibleCommentsData}
          header={`${visibleCommentsData.length} ${
            visibleCommentsData.length === 1 ? "Comentario" : "Comentarios"
          }`}
          itemLayout="horizontal"
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta
                avatar={<img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxIQEhERERAVFRAXFRUWFRcVFxAQEhYXFRUWFhUTFRYZHSggGB0nGxUVITEhJSk3Li4uFx8zODMtNygtLisBCgoKDg0OGxAQGy0lHyUtLS0wLS0tLS4tLS0tLTAtLi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABQYDBAcCAQj/xABBEAACAQICBgYGCAUDBQAAAAABAgADEQQhBQYSMUFRE2FxgZGhIjJCUrHBBxQjM2Jy0fCCkqKy4SRT0hU0Q3Tx/8QAGwEBAAIDAQEAAAAAAAAAAAAAAAMEAgUGAQf/xAA7EQACAQMBBQUFBwMDBQAAAAAAAQIDBBEhBRIxQVFhcYGx8AYTIpHRFDI0cqHB4TOi4kKy8SMkUoKS/9oADAMBAAIRAxEAPwDLEROqOdEREAREQBERAEREARET0CJq4jG00yZhfkMz4DdMX/UgfVQntIX9ZBO4pQ0lJEsKNSesYs34mkMcf9v+r/E9DHLxDDz/AMzFXdF/6vNeaRm7Wsv9P7m3ExU6ytuIPx8JllhNNZRA008MREQeCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCJGaU0qtH0RnUPDgBzP6SMTFPVOdQgdRsO4CVK15Cm93iy1RtZ1Fngixu4UEk2AFyTkABxlX0np9qhK0iVT3tzN/wAR5/CbeKoA0yGdiu8gs1spU0qqATvzvskWsOF+O6Ua97Kot2Gi59S5Qs4weZa+RIUcSBuz7AzfATaXH23vs/mR1HiVkTT08qb6V+xv8Tew+s1D2lde4MPIyjlF0kaGPZvVdH7CpPgDNpccNzqV8xIx8Rgq+9kDczem3jlPi4Zk+5xSsvuuysPEfpAJrYVhdT4fvKZKeNenk42h59x498g6WKsbNZW502V17xeSlPEBhZrEe8PV7/dklOrKm8wZHUpwqLEkTFGqri6m4/eR5TLK+xai20py8j1H9ZMYTErUXaXvHEHkZuba6VZYej6GpuLZ0nlao2IiJaKwiIgCIiAIiIAiIgCIiAIiIAiIgCa2PxQpU2qHgMhzPAeM2ZXtb69lROZLHuyHzkNxU93TcvWSWjT95UUSsYnEk7TsbknxJmOjpIjjNLS1SzBPdAv2nM/KauGN2ufVUXPyHeZzuTfFqw+MNQgOfQHs+8evqmc6pvpCsWpOEsl2Yi43gKtgeOfhK/gHeo4VQS7GwA+E7Vq1o36tRCk3qHNz18h1Dd485DXq7ixzLFCjvvL4HKsd9HePp3IVKo/A2fgwEg6+hMTTNnw9RT1q3xn6KDQVB3iVftEi19mh2n52w2iqzmy0nv2ECSNbVbHKNoYZmXmtmP8AKM53YYVPdHgJsUaQHCFXlnkHb08cz880nNL0aisjcmUqfOSeExy8HHjO6YrRtGsLVKasPxAGVrSX0e4Kpe1LZP4bgeEl+0NcUR/ZoPhLHeUSjjRaxzXlw7uU+4bE9DUDA3pnI9n6j975r606jfUCtUVKhwpIViCQ1Ik5FuandfhNh8OvRgC24WOWfIy1RrcJx5FOrRxmEyyg3zG6epF6v4nbplD6yG3d7PzHdJSdNSqKpBSXM52pBwk4vkIiJmYCIiAIiIAiIgCIiAIiIAiIgHyU/WurtVgvIAeJ/wAy4znWn8TesTzcebTXbRlimo9X5F6wjmbfReZAaQqbVSoebN8cp8o0zZVAuzG//EeFz3zLhsIarhbXBYX772HfYzoWB1VFN0vm1tqo3C/uL1DdNDVqqC7Te0KDqPsNjUPV8UR0zi7nd1dku61JHKwQW3ADsAkPjdbsPSyDbZ/Du8Zrkp1Jaas2rdOlFckW5akzK8o+j9dadRwpSwPG8t6PE6c4feRhCpCp91m6rzMjzSVpW8XrzTSq9NE2gjFS17DaU2YDLgQReZU4ym/hRjUlGCzIvKPPe1Kto7WyjUttXU/zDyz8pYKNcMAVIIO4g3B75JKMo/eREnGX3WMfhUqo9N1DIylWB4gixnDqjNgMTUwNY+gD9kx5HNQeoi3YZ3MtOU/TXoq4o4pRmD0b9hzXzv4z2hPdnjqeVo71N9mvrwMGhn2a9uDqR3rmPIGWOc70BpPZ6Eub2zvxsMiD12O/9noQM6nZ0803Ho/M5i/hial1XkeoiJsCiIiIAiIgCIiAIiIAiIgCIiAYcTU2EduSMfAXnLdLVCalIcSVPdfKdSxVAVEZDezCxtyldx+glp01JbafpdtmOV/RYKoHAAHdNbf0pT+Lkk/Mv2VSMfhfFv8AY+aq6KBpF7Z9MD/IxH6y81WCKWY2AFyeoSP1QoD6uuXtVP7zMutGHd8PUSlbbNrXJA3jebTl6izUeep1VJ4pLCzoc81o1keuxRSVpDcOfW0h8Fga1f7umSOZ9FfE7+6WfR2qYp/aYggkZm+VNbcc/iZZNHVaI2TmFPquUdaZ7GIt+slddpYpR0RErbL3q8tXy9fyQGgdTHLK1apYCxKpfPqLHh2CdJpzFRozZVJTnUlPWTLkacKekUZElB05qFUNSpVw1UemzOUe9rsbmzDdmTwl/VZsIk9hOUXmLMJxjLSSOJYqhisIftqLAe8vpL4j5yb1c1qamQVa6+0pOTfoev4y/wCPx+HBam5LEeuFSpVC9TFQQD1b5VtK6jUcSPrGCqqjHMFc6bcwbbpdVZ4xUjo+ZUlbxzmnLVci96PxiV6a1EN1Yd4PEHrBkD9I+EFXR+JB9lNsdqEN8pm1G0TXwtB0xBXbNQsAhLADZVb3IGZI3TProP8AQY3/ANer/YZVaSnp1J1lw16HDdBqx6BlF9lwzfl27H4g906kBbIbpQvo9W79iP8A3KPnL/Ot2dDFNy6vyOUv5Zmo9F5iIibAoiIiAIiIAiIgCIiAIiIAiIgHwC+Q3yP1gYKuxf0rgm3CS1J9halTiq5drZX8Lym4usX2z2zn9qX84VVQhw0z255HR7K2ZCdvK4nq9d3sxz+ZctSH2sKp/HVHhUYSXqpeROpSWwqj8b+Zv85NsJpK33n3m4t18Ee4oP0hszKlFFdmJ2rAHYsPaY7jnuF+Z5SF0ONIUrBLum7Yb0lI5bsp1ZsOrbwDMlOgo3CeRuJxioxwZztac25TyzBoFWNFC9Nqbe6xUkdV1Jy5dXCSgpTxRYCbiMJG3vPLMt1xWEa4pzBpcVRQq/V12q+yQguFzOVwTkCBc90kxafdmex0eTCSbRyttG6XSzhKYC7qYIYfxbto983tTMbiRjClXCPSFUHpAqP0G0qkiqDmEPo7Jzz2hynRdkT6qiWHWm00/IhVCnF5isPvPLCRWsOHFXDV6TGyuhQkWuA/okjxkq5kDrkf9FirGx6JgCN4JsARIFrJEjWIts5v9GGjQ9TEoHsUBVb8fT3H+WWytSKMVYWYbxKtqwTTfEVlFgz0mtyLoKjDuL2l60sRUSlW4kbJ8Lj5zebOv5Kv9nlwfDseM/rqjT7R2avsquY8VnPas48McdCMiInRHOCIiAIiIAiIgCIiAIiIAiIgH0i9OovUD4HP4yrdBbaH7zlqptY/Hv3yL0hQADeXXmJy22KDjdRqcpYXiv4Ou2LcqVlOlzjl+D5/MmtTT9gRyqN8FkzUMo2rmmuixFLDE+hUNQn82yux2eow/ilzxFWa+4WJP5l60kpU0ly0PS1p9bE2kc1a3GVXSms5LFKOS8XOZP5QeHWZWp051HiJbrVYUlmRbamlQpN5io6xsptlaUHF1ukU/bnb5hyDfxmto7HYlGArenSvbb3MvWbZESadpVisp/UgpX9CTxJNd/A61Q0/fgJIYbHhpxfTGszpVNDDsPRNmc2IvxCjdlzPhJjQ+laiqCMSS+83YEHq2Tl5RTtqslvN4PK93Qi92Kb9fqdaWtMgqSn6L1oRrLWHRvz9g9/s9+XXLItSYyUoPEhFxmsxZsu0g9b2/wBHiPygeLqJLGpKdr1pAhTRHqlRtdR21YH+n+qKKcqiSPKzUKbb7vmaWr1EPglAA2tt1JtmbHInnkQO6T2kfQo06fH9Bb5yL1ECjDOznLpnt/Kk2dIYnpHJ4DIdnKbLZtu53znyjr9F3518DX7RuVT2eqb4y0+vhjTPaa8RE6w5EREQBERAEREAREQBERAEREATBjVuj7vVJ68heZ55YXymM4qcXF8zKM3CSkjmWmsSyVg6mzJssp5EekD4yY0trBVGIStezhfVz2dknNOzLxzkDrHTK1nB35Dwy+U86Yq3dSNxpqfjOXcVzXYdHGbS+F9pcdKaxpUw+2h35MvtA+4fEd0olWs9QneepQTbuE806vogG5Be5A3mwG7xaTWjdI1XdUoolKmM9m23tW94nf3SFU3BbsF82WJ1ffPeqPHLRZ9esEItJ722Hvy2Wv4Wli1c1br12vU6SlRG++0jv+FQeHXLpo3YqLfZF/aU2Nj8xPmlMXhcOoNUBSdyptI7dgQg98qyuJ53EsP5lqNpTS397K+RStY9T6mHPSYdWekd6i7OvzYSCdGT10ZfzKy/ETqOjqGFxAOy1W/FWq1iw7mY+Ux1tR8EWNWq1TYGbKXVadhmSx2b275lCvu/DU492pjUtlL4qfB9qwc+w2Oq0rZnYO4MDsnsv8ROjak6zqaVRar2VBtLfMgXsUHPMrbtlV0lpL63UrHDqq4dAAiMo2agBsWbiL5W5CRGj6v2jWQovuk7ViN4v23lhwdSOJrBXVSNKW9Tee9Y9eOC6aS1hqVHNdTslCDTG8AA5g87gm//AMmrpHSJr9JUbe4vbfbLIdwsO6QrV8mHUZ9Fay93ykyhGPBdhC5ylxfPPiWzVwfYL1lj1+sR8pJzWwFDo6VNDvVAD22z87zZnTUYblNR7Ec5Vnv1HL1j1yEREkIxERAEREAREQBERAEREAREQBERAKH9IGD2aiVQMnBB/Mv6g+RlZqvtKnUCvgbjyInUNYNG/WaD0/b9ZDyYbvHMd85XYjaUixBzB3gjIg+fhNDfUvd1crg9fHn67TdWdXfp4fFafQ2dF0QzG/AfGSuHcU6q290yG0fW2W7RNzEVfSU9RlRMtcyexmmzQRqiH0xkOWeWfMfpKzTxTO/S1GLOSCScz2dQ6pj0lXJW3WJr0WynmFnPM9y8Y5HQnVTsup2WyIIyIykHrbpqvU2aL1B0QANlGztm5zfnawy3dU+08adkZ8BILSdbbfsENRbTa4HqlJJpPRkjq/W2dvst5zZxbC9xvO+ROAfZBmWpWvPTwzdJJfV3D9NWUH1V9M9xFh428DK8r8Z0DVbRxo0tphao9mPMD2V8ye+WbOl7yqui1f7fqVrur7um+r0XruJqIidAaMREQBERAEREAREQBERAEREAREQBERAEqGuWrhqXxFBb1P8AyKN7W9tRxbmOPbvt0kKOiahzb0B/V/L+sp31W3hS/wC4korq3z7OvgWLb3u/mksv1xOCk8RNk1LgGdM1q1MoVrvSbo6/En1HP4lG49Y77zm+kNG1sK2zWQgHcd6N+Vh8N85mhd0K8nGnLPesN9uHr61N7KE4pOS/c1cVmDMVI5T3UmGnLCPM8yWFXKaLNckzMW9G/VMFBSxAEHuTZTIQDebmjdF1sXUFHDUmqNx2RkB7zMclHWTOq6rfRXTpjbxr7dXgifdIeZJH2h7RbqO+Q3FzRt8Kcvlq+/B5HelqkUjVTQJcrXqramM0U+2eDEe7y59m+7ScxurFVM6ZFReXqv4HI9xkGykEgixGRByII4GdFYVbadP/AKE1Lr18Vo14o0l26u/mosdOnrqIiJeKwiIgCIiAIiIAiIgCIiAIiIAiIgCeXa09Nl2zVqNPMmtrXrzu0/n9PqfKmJYZrkRuk/g9Y6VayViKVY5Z5U3P4W4H8J7rysVGmtXphgQRcTWbS2bSvoJT0a4NcVnz5FjZ+0qttNvinxT9aFs0ph2GdpX8fTWopSooZTvBFxI2hjcRh8qNU7HuP9onYAfVHZaZ11nQ5YjDEH3qRuP5G3eM4yvsG7tnmC311i8P5P8AZs6222rb1lhvHeVfHaq2b7Jz0Z4GxZL8QfaHVv7ZDYzQdejm1MlN20t2XcT2jIHfynS8PjcDU3V9nqdalM/Cx7p5x+mMPYCidunTJ22N0UudnIXFzYHf+KTW1zfSqKn7uTfD4ouP9zws/wDOG+M1V28YOTkl3PP6av8Ak55o7Q1fFFaVBLmwLMTsooO4k9x3cpd9E/Re5YLUrbNIAbbKBt1Cc9lAfUUbrnMm+W6etE4xcPiGrVFK0iFD2BbZ2iNhgBmRc2750ClrPggARVLHkiVGPkJ7fVdpRr+7hTa05Le49qyRU520qe+pJrq2l+hJaC0PRwlMUsPSCJvNt7HdtMxzY9Zkqiyr1dbCcqND+KoQvfsi5PlNCvjcTX+8qkL7q2pr5ZnvMwt/Z+8rPeq/DnnJ6/LV/PHeUrjblpR0i959I6/rw/UtOkNN0qN1B26nurw/MeHx6pUMQ3Suzt6zXJtYeEy0MIBlaZ+gHKdXs/Z9CxT3MuT4t+SXJfPvOXvto3V4018EVwSb+bfPy7CNfDcv8+E1yJNtheU069C+/Jv3vm0UkyCjfVKb3a/Dr9fX8aMQRbI74khuBERAEREAREQBERAEREATJSTInw+cxzZreitu79ZhJ8itdz3abXU0arTTqNM1Vpo16lp6aelAyhYZJlQT6VnhlvGjUpTWfCA8JKFJ86KN1E0azXAi/qXVJjVrV3paVRQQCarHMEixVMsuyeNi0zYfGVFoP0YP3jZXIJ2BSBNx1EzXbRpVZwhGhLdnvLD6YTb05/DnTmX7C5inN1VmO7quGdUlry1fHlxLE+rKYbCViSGcimN3oqA65C8haVMDcJu6GxlV6GKpnbNLZQ+mCCjbahlz5TWQTKwp1qaqRrT3pb3Hhpuxxpy7intSpSm4SpRwt3hx13pZ15m1hafGb6JNbDDKbqSxN6kFFLdPqifau6epirVLAzFaskk1FPJhw+M4GZ66BhcSBetZrSUwdfgZLKGNUVI1HKO5PgzVxdP2uI3zVkpXXM8jlIxlsSJLF6Gx2bVbg6UuMfI+RETI2YiIgCIiAIiIAiIgHvDrdh1Zxj34TLhBkT+/3umniWuTInrPuNZfT1x66mq8iNOPZDbflJdpEY5dupTTm4v2DM/CZshttJpvlqTNJchPdp6An2Cnk8bMbMyWn20DJiKXm/oivRpoadWmzAttgpvFwBwNwcvOaoE9gSreWkLqn7uba1TTi8NNcGmWbS9qWs9+CT0aw9Vh/IsFfSuH6B6VJGUm2bDkQb3Jud0hVE8LM1BrMl922oPYWEjoW1Oyoy3XKXGTbeW9OunJHlxcVL+tBSSjwisLCWX49TPh3E3abS4UkUAWVR2ACZ1tNA/aOMtVT/u/xOjp+zsoaOr/AG/5FNCk7h5GauNpkWvl4iX68i9ZVDYd+Y2beNvgTJbbbynXhTcEt5pfezx8CK+2FuW85qbbim+GOGvXsOWUmPS1b/7jDwNh5CTGHeReLTZrNyaz+Vj5ib+HM6mSOZraxTXREm5uAZo4pc78/l+xNqm2VphxIuOwzGOhlZVd24TfPT14o1YiJmdGIiIAiIgCIiAJ5nqbGjae1VpLzceFxfymM5KMXJ8FqepZaS5m5pDBNh1sw5Z+ySRmAe3LukCxnUHbgcxyOYkdX0XQf1qK3/DdP7SJyNv7TwgsXEHnrH6Ph4MsXns/KpPepTXc/qs+RzuoZH4IbVcn3VPnl+s6NiNWsMR6rDsb9QZVMXo2lQqkUyxuLHaIO4m1rAdc21pty1u6qpUt7eeeK6LPVmtr7Kr2tGVSeMcNH1eOiPBM+zwTPoM3Bo8HsT0J4BnoQeH0T2J4E9iDBnsT6y3Fv32zyJ6Bh6mOWtUbuD03iCgvVN+xOHdNyjpasfWqeVvgZA4M5d7fEzZVpTWz7SP3aUF/6x+hcqbQu995qz/+pfUnTjKh9tvEzRxlUm12v23MwJXMVHvJKdCEHmKS8ERV7uVWOHJ+LIvS6Zo3aPmPnPuGMlcLgqddglTa2bgjZIBuB1g9cncNq3hhwY9rD5ASpebZtbSfuquc4zos6fNdC/ZbKuLy3U6eMJtavH7PqVqmZu4HBNXbYUGxFibXC39oy2YbRFBfVp+JdvImSCAAWUADlYAeE1Vx7SU91qjF56vCx24WcmxtvZiopxlWmsJ5xHL/AF0x34OX4iiUZkb1lYqe0GxniSes9PZxNXr2W8VF/O8jJ0ltV97RhU/8op/NZJ6kd2co9G/MRESYwEREAREQBN3Qf/cUvzfIz7Egu/6FT8sv9rJKP9SPevMujzHPsT5JX4nWIx1t0pGmfvf4fm0+xNx7Nfj1+WXkajb34KXfHzRoGfRET6QcEfRPQiIPD2J7E+RBgz0J6iII2YMFuP53/uM2hPsQZVOJ7E+xEELN3Rf3i9/waWqhETgvaj8ZH8i/3SO89l/wcvzvyibaTIIiaOPA6FlI1x+/P5F+chYifTNlfgqP5Y+RzV1/Xn3sRES+VxERAP/Z" style={{width:"50px", height:"50px", borderRadius:"50%"}}/>}
                title={item.author}
                description={
                  <>
                    {item.content}
                    <div style={{ color: "gray", fontSize: "12px" }}>
                      {item.datetime}
                    </div>
                  </>
                }
              />
            </List.Item>
          )}
        >
           {visibleComments < comments.length && (
        <p
          style={{
            textAlign: "center",
            cursor: "pointer",
            color: "blue",
            opacity: ".6",
          }}
          onClick={handleLoadMoreComments}
        >
          Cargar más comentarios
        </p>
      )}
          <Space.Compact
            style={{
              width: "100%",
              marginTop: "10px",
            }}
          >
            <Input value={commentValue} onChange={handleCommentChange} />
            <Button type="primary" onClick={handleAddComment}>
              comentar
            </Button>
          </Space.Compact>
        </List>
      )}
    </div>
  );
};

export default ProfilePublication;
