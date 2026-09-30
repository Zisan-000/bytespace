import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaGoogle, FaStar } from "react-icons/fa";

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-[rgb(0,59,226)] bg-grid-pattern flex items-center justify-center p-6 md:p-12 overflow-hidden">
      <div className="w-full max-w-360 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        <div className="animate-float flex flex-col text-white w-full mb-10 max-w-150">
          <div className="flex items-center gap-2 mb-20">
            <Image
              src="/logo.png"
              alt="ByteSpace Logo"
              width={32}
              height={32}
              className="object-contain"
            />
          </div>

          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Sign in with ease
          </h1>
          <p className="text-[15px] text-white/80 leading-relaxed mb-16 max-w-112.5">
            Experience a seamless and efficient sign-in process that grants you
            instant access to a world of knowledge.
          </p>

          <div className="relative w-full h-112.5 mt-8 ml-15 hidden md:block">
            <Image
              src="/circle.png"
              alt="Green Circle"
              width={150}
              height={150}
              className="absolute top-1 left-1 z-30 object-contain drop-shadow-2xl"
            />

            <div className="absolute top-15 -left-20 z-10 w-80 bg-white rounded-3xl shadow-2xl p-3 flex flex-col gap-2 scale-90 opacity-90">
              <div className="h-55 w-full bg-gray-200 rounded-xl overflow-hidden relative">
                <Image
                  src="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&q=80"
                  alt="Course"
                  fill
                  unoptimized
                  className="object-cover"
                />
              </div>
              <span className="bg-white/80 absolute bottom-37 left-4 backdrop-blur-sm text-[10px] font-bold px-2 py-1 rounded-full text-black">
                17 Lessons
              </span>
              <div className="px-2 pt-1 pb-2">
                <h4 className="font-bold text-[16px] text-black leading-tight">
                  Build Digital Asset
                </h4>
                <p className="text-[11px] text-gray-500 mb-2">
                  by purepearl studio
                </p>
                <div className="flex gap-2 items-center mb-1">
                  <span className="text-[12px] font-semibold text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                    Beginner
                  </span>
                  <div className="flex items-center">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="w-6 h-6 rounded-full bg-gray-300 border-2 border-white -ml-2 first:ml-0 overflow-hidden relative"
                      >
                        <Image
                          src={`/avatar-${i}.png`}
                          alt="user"
                          fill
                          className="object-cover"
                        />
                      </div>
                    ))}
                    <div className="w-6 h-6 rounded-full bg-black border-2 border-white -ml-2 flex items-center justify-center text-white text-[9px] font-bold z-10">
                      26+
                    </div>
                  </div>
                </div>

                <div className="font-bold text-[#003BE2] pt-2 text-[18px]">
                  $25
                  <span className="text-[12px] text-gray-400 font-medium">
                    /lifetime
                  </span>
                </div>
              </div>
            </div>

            <div className="absolute -top-10 left-20 z-20 w-85 bg-white rounded-3xl shadow-2xl p-4 flex flex-col gap-3">
              <div className="h-45 w-full bg-gray-900 rounded-xl overflow-hidden relative">
                <Image
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&q=80"
                  alt="Dashboard"
                  fill
                  unoptimized
                  className="object-cover opacity-80"
                />
                <div className="absolute bottom-2 left-2 flex gap-2">
                  <span className="bg-white/80 backdrop-blur-sm text-[10px] font-bold px-2 py-1 rounded-full text-black">
                    17 Lessons
                  </span>
                  <span className="bg-white/80 backdrop-blur-sm text-[10px] font-bold px-2 py-1 rounded-full text-black">
                    2 hours 16 mins
                  </span>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-start">
                  <h4 className="font-bold text-[20px] text-black leading-tight">
                    the Power of Big Data
                  </h4>
                  <div className="flex items-center gap-1 text-[13px] font-bold text-gray-500">
                    4.5 <FaStar className="text-yellow-400" size={14} />
                  </div>
                </div>
                <p className="text-[12px] text-gray-500 mb-3">
                  by purepearl studio
                </p>

                <div className="flex gap-2 items-center mb-1">
                  <span className="text-[12px] font-semibold text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                    Beginner
                  </span>
                  <div className="flex items-center">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="w-6 h-6 rounded-full bg-gray-300 border-2 border-white -ml-2 first:ml-0 overflow-hidden relative"
                      >
                        <Image
                          src={`/avatar-${i}.png`}
                          alt="user"
                          fill
                          className="object-cover"
                        />
                      </div>
                    ))}
                    <div className="w-6 h-6 rounded-full bg-black border-2 border-white -ml-2 flex items-center justify-center text-white text-[9px] font-bold z-10">
                      26+
                    </div>
                  </div>
                </div>
                <div className="font-bold text-[#003BE2] text-[22px] mt-1">
                  $25
                  <span className="text-[13px] text-gray-400 font-medium">
                    /lifetime
                  </span>
                </div>
              </div>
            </div>

            <div className="absolute bottom-5 left-37.5 z-20 w-60 bg-[#CBFC01] rounded-3xl shadow-xl p-4 flex flex-col gap-2">
              <div className="  items-center w-full">
                <h3 className="font-bold text-[15px] text-black m-0">
                  Happy Students
                </h3>
                <div className="flex items-center gap-1 font-bold text-[12px] text-black">
                  4.5 (240) <FaStar className="text-[#003BE2] h-3 w-3" />
                </div>
              </div>
              <div className="flex items-center justify-start mt-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 -ml-3 first:ml-0 rounded-full bg-gray-200 border-2 border-[#CBFC01] overflow-hidden relative"
                  >
                    <Image
                      src={`/avatar-${i}.png`}
                      alt="user"
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
                <div className="w-8 h-8 -ml-3 rounded-full bg-black border-2 border-[#CBFC01] flex items-center justify-center font-bold text-white text-[10px] z-10">
                  2K+
                </div>
              </div>
            </div>

            {/* 3D Asset: White Frame (Squiggle) */}
            <Image
              src="/Frame white.png"
              alt="White Frame"
              width={180}
              height={180}
              className="absolute top-50 right-40 z-30 object-contain drop-shadow-xl"
            />

            <Image
              src="/cone.png"
              alt="Cone"
              width={150}
              height={150}
              className="absolute -bottom-10 -left-15 z-30 object-contain drop-shadow-2xl"
            />
          </div>
        </div>

        <div className="w-full flex justify-center mt-30 lg:justify-end">
          <div className="bg-white rounded-[2rem] p-8 sm:p-12 shadow-2xl w-full max-w-130">
            <span className="text-[#003BE2] text-[15px] font-medium mb-2 block">
              Sign In
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-10 tracking-tight">
              Welcome Back
            </h2>

            <form className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-[13px] font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="designer@example.com"
                  className="w-full border border-gray-200 rounded-2xl px-4 py-3.5 text-[15px] text-gray-900 outline-none transition-colors focus:border-gray-400 placeholder:text-gray-400"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[13px] font-medium text-gray-700">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="********"
                  className="w-full border border-gray-200 rounded-2xl px-4 py-3.5 text-[15px] text-gray-900 outline-none transition-colors focus:border-gray-400 placeholder:text-gray-400"
                />
              </div>

              <div className="flex justify-end mt-2">
                <Link href="/">
                  <button
                    type="submit"
                    className="bg-[#D4FB20] text-black font-medium text-[15px] px-10 py-3.5 rounded-full transition-transform hover:scale-105 active:scale-95 shadow-sm"
                  >
                    Sign In
                  </button>
                </Link>
              </div>
            </form>

            <div className="flex items-center my-8">
              <div className="grow border-t border-gray-200"></div>
              <span className="px-4 text-[13px] text-gray-400">or</span>
              <div className="grow border-t border-gray-200"></div>
            </div>

            <div className="flex justify-center gap-4 mb-4">
              <button
                type="button"
                className="flex items-center justify-center w-16 h-16 border border-gray-200 rounded-2xl hover:bg-gray-50 transition-colors"
              >
                <FaFacebook className="w-8 h-8 text-black" />
              </button>
              <button
                type="button"
                className="flex items-center justify-center w-16 h-16 border border-gray-200 rounded-2xl hover:bg-gray-50 transition-colors"
              >
                <FaGoogle className="w-7 h-7 text-black" />
              </button>
            </div>

            <div className="mt-8 text-center">
              <p className="text-[14px] text-gray-500">
                New user?{" "}
                <Link
                  href="/signup"
                  className="text-[#003BE2] font-medium hover:underline"
                >
                  Create an account
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
