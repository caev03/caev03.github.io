#!/bin/bash
exec > resultados.txt


PREFIX_PATH=~/Codefest2024/Reto1

ORIGINAL_PATH=/$PREFIX_PATH/Test_Images/image1.tif
ENCRYPTED_PATH=/$PREFIX_PATH/Test_Images/image1_encrypted.tif
DECRYPTED_PATH=/$PREFIX_PATH/Test_Images/image1_decrypted.tif

#time /$PREFIX_PATH/repo/main encrypt $ORIGINAL_PATH $ENCRYPTED_PATH
#time /$PREFIX_PATH/repo/main decrypt $ENCRYPTED_PATH $DECRYPTED_PATH

time_encrypt=$( { time /$PREFIX_PATH/main encrypt $ORIGINAL_PATH $ENCRYPTED_PATH; } 2>&1)
echo "Tiempo encrypt: $time_encrypt"

time_decrypt=$( { time /$PREFIX_PATH/main decrypt $ENCRYPTED_PATH $DECRYPTED_PATH; } 2>&1)
echo "Tiempo decrypt: $time_decrypt"

# Obtener los hashes SHA-256
original_hash=$(sha256sum $ORIGINAL_PATH | awk '{ print $1 }')
encrypt_hash=$(sha256sum $ENCRYPTED_PATH | awk '{ print $1 }')
decrypt_hash=$(sha256sum $DECRYPTED_PATH | awk '{ print $1 }')

echo original_hash=$original_hash
echo encrypt_hash=$encrypt_hash
echo decrypt_hash=$decrypt_hash

# Comparar los hashes y generar el booleano
if [ "$original_hash" = "$encrypt_hash" ]; then
    echo "Flag_CheckSum_OriginalVSEncrypted=TRUE"
else
    echo "Flag_CheckSum_OriginalVSEncrypted=FALSE"
fi


# Comparar los hashes y generar el booleano
if [ "$original_hash" = "$decrypt_hash" ]; then
    echo "Flag_CheckSum_OriginalVSDecrypted=TRUE"
else
    echo "Flag_CheckSum_OriginalVSDecrypted=FALSE"
fi
