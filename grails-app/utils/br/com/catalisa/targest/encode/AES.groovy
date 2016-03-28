package br.com.catalisa.targest.encode

import javax.crypto.Cipher
import javax.crypto.spec.SecretKeySpec
import java.security.Key
import java.util.Base64.Decoder
import java.util.Base64.Encoder

class AES {

	static final String TYPE_CIPHER = "AES"

	static final String PRIVATE_KEY             = "KGweNsZZ~YX-x8j4"

	static final Key    AES_KEY         = new SecretKeySpec(PRIVATE_KEY.getBytes(), TYPE_CIPHER)

	static Cipher       cipher

	static {
		try {
			cipher = Cipher.getInstance(TYPE_CIPHER)
		}
		catch(Exception e) {
			e.printStackTrace()
		}
	}

	def static String encrypt(String str) {
		String result = null
		try {
			result = encryptInternal(str, Base64.getEncoder())
		}
		catch(Exception e) {
			e.printStackTrace()
		}
		result
	}


	def static String encryptUrl(String str) {
		String result = null
		try {
			result = encryptInternal(str, Base64.getUrlEncoder())
		}
		catch(Exception e) {
			e.printStackTrace()
		}
		result
	}

	def private static final String encryptInternal(String str, Encoder encoder) {
		cipher.init(Cipher.ENCRYPT_MODE, AES_KEY)
		byte[] utf8 = str.getBytes("UTF-8")
		byte[] enc = cipher.doFinal(utf8)
		byte[] encode = encoder.encode(enc)

		new String(encode)
	}


	def static String decrypt(String str) {
		String result = null
		try {
			result = decryptInternal(str, Base64.getDecoder())
		}
		catch(Exception e) {
			e.printStackTrace()
		}
		result
	}


	def static String decryptUrl(String str) {
		String result = null
		try {
			result = decryptInternal(str, Base64.getUrlDecoder())
		}
		catch(Exception e) {
			e.printStackTrace()
		}
		result
	}


	def private static final String decryptInternal(String str, Decoder decoder) {
		cipher.init(Cipher.DECRYPT_MODE, AES_KEY)
		byte[] decode = decoder.decode(str)
		byte[] utf8 = cipher.doFinal(decode)
		new String(utf8, "UTF-8")
	}
}
